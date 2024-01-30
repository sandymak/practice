import './JobBoard.css'
import { useState, useEffect } from 'react'

function JobBoard() {
    const [fetchingJobDetails, setFetchingJobDetails] = useState(false)
    const [jobIds, setJobIds] = useState(null)
    const [jobs, setJobs] = useState([])
    const [page, setPage] = useState(0)

    const PAGE_SIZE = 6

    useEffect(() => {
        fetchJobs(page)
    }, [page])

    const fetchJobIds = async (currentPage) => {
        let jobs = jobIds
        if (!jobs) {
            const response = await fetch(
                'https://hacker-news.firebaseio.com/v0/jobstories.json'
            )
            jobs = await response.json()
            setJobIds(jobs)
        }
        const start = currentPage * PAGE_SIZE
        const end = start + PAGE_SIZE
        return jobs.slice(start, end)
    }

    async function fetchJobs(currentPage) {
        const jobIdsForPage = await fetchJobIds(currentPage)
        setFetchingJobDetails(true)
        const jobsForPage = await Promise.all(
            jobIdsForPage.map((jobId) =>
                fetch(
                    `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
                ).then((res) => res.json())
            )
        )
        setJobs([...jobs, ...jobsForPage])
        setFetchingJobDetails(false)
    }

    return (
        <div className="job-board-wrapper">
            <h1 style={{ color: 'tomato' }}>Hacker News Job Board</h1>
            {jobIds == null ? (
                <p className="loading"> Loading...</p>
            ) : (
                <>
                    {jobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))}
                    <div>
                        {jobs.length > 0 &&
                            page * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
                                <button
                                    className="load-more-button"
                                    type="button"
                                    disabled={fetchingJobDetails}
                                    onClick={() => setPage(page + 1)}
                                >
                                    {fetchingJobDetails
                                        ? 'Loading...'
                                        : 'Load More Jobs'}
                                </button>
                            )}
                    </div>
                </>
            )}
        </div>
    )
}

function JobCard({ url, by, time, title }) {
    return (
        <div className="job-card">
            <p className="job-title">
                {url ? (
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="job-title"
                    >
                        {title}
                    </a>
                ) : (
                    title
                )}
            </p>
            <div className="job-detail-container">
                <p className="job-detail">
                    By {by} &middot; {new Date(time * 1000).toLocaleString()}
                </p>
            </div>
        </div>
    )
}

export default JobBoard
