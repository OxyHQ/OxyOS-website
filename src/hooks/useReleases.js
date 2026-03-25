import { useState, useEffect } from 'react'

const DOWNLOAD_BASE = 'https://os.oxy.so/downloads'
const ARCHS = ['amd64']

function compareVersions(a, b) {
  const pa = a.replace('v', '').split('.').map(Number)
  const pb = b.replace('v', '').split('.').map(Number)
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const na = pa[i] || 0
    const nb = pb[i] || 0
    if (na !== nb) return nb - na
  }
  return 0
}

export function useReleases() {
  const [releases, setReleases] = useState([])
  const [latest, setLatest] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cached = sessionStorage.getItem('oxyos-releases')
    if (cached) {
      const data = JSON.parse(cached)
      setReleases(data.releases)
      setLatest(data.latest)
      setLoading(false)
      return
    }

    fetch('https://api.github.com/repos/OxyHQ/OxyOS/tags')
      .then(res => res.json())
      .then(tags => {
        if (!Array.isArray(tags)) return

        const versions = tags
          .map(t => t.name)
          .filter(n => /^v\d/.test(n))
          .sort(compareVersions)

        const latestVersion = versions[0] || 'v1.3'
        setLatest(latestVersion)

        const allDownloads = []
        versions.forEach((version, i) => {
          const ver = version.replace('v', '')
          ARCHS.forEach(arch => {
            allDownloads.push({
              version: `${version} (Ozone)`,
              ver,
              arch,
              archLabel: 'amd64 (x86_64)',
              iso: `${DOWNLOAD_BASE}/oxyos-${ver}-${arch}.iso`,
              status: i === 0 ? 'Current' : 'Older',
            })
          })
        })

        setReleases(allDownloads)
        setLoading(false)

        sessionStorage.setItem('oxyos-releases', JSON.stringify({
          releases: allDownloads,
          latest: latestVersion,
        }))
      })
      .catch(() => setLoading(false))
  }, [])

  return { releases, latest, loading }
}

export function getDownloadUrl(version, arch) {
  const ver = version ? version.replace('v', '') : '1.3'
  return `${DOWNLOAD_BASE}/oxyos-${ver}-${arch}.iso`
}
