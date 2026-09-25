import Papa from 'papaparse'
import projectsCsv from './Projects_Data.csv?raw'

const { data } = Papa.parse(projectsCsv, {
  header: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.trim(),
})

export function getProjects() {
  return data.map((project) => ({
    title: project.Title?.trim(),
    subtitle: project.Subtitle?.trim(),
    contributors: project.Contributors?.trim(),
    date: project.Date?.trim(),
    description: project.Description?.trim(),
    githubRepository: project['github repository']?.trim() || null,
    language: project.Language?.trim(),
    framework: project.Framework?.trim(),
    showcaseVideo: project['Showcase video']?.trim() || null,
    thumbnail: project.Thumnail?.trim() || null,
  }))
}
