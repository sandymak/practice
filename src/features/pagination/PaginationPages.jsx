import { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'

const OFFSET = -1
function PaginationPages({ mockedPeopleData, firstPage, limitPerPage }) {
    const [allProfiles, setAllProfiles] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [profilesInView, setProfilesInView] = useState([])
    const [pages, setPages] = useState(null)

    useEffect(() => {
        const timerId = setTimeout(() => {
            let profiles = allProfiles
            if (!profiles) {
                profiles = mockedPeopleData
                setAllProfiles(profiles)
                const pageNums = new Array(
                    Math.ceil(profiles.length / limitPerPage)
                )
                    .fill(0)
                    .map((_, index) => index + 1)

                setPages(pageNums)
            }

            const start = firstPage * limitPerPage
            const end = start + limitPerPage

            setProfilesInView(profiles.slice(start, end))
        }, 4000)

        return () => clearTimeout(timerId)
    }, [allProfiles, mockedPeopleData, firstPage, limitPerPage])

    const handleButtonClick = (event) => {
        const { value } = event.target
        const start = (Number(value) + OFFSET) * limitPerPage
        const end = start + limitPerPage

        setProfilesInView(allProfiles.slice(start, end))
        setCurrentPage(Number(value))
    }

    return (
        <div className="job-board-wrapper">
            <h2 style={{ color: 'tomato' }}>Pagination with Pages</h2>
            {allProfiles === null || pages === null ? (
                <p className="loading">Loading...</p>
            ) : (
                <>
                    {profilesInView.map((profile, index) => (
                        <ProfileCard
                            key={`${profile.name}${index + 2}`}
                            {...profile}
                        />
                    ))}
                    <div className="button-container">
                        {pages.map((page) => {
                            const isActiveButton = page === currentPage
                            return (
                                <button
                                    className={[
                                        'load-more-button',
                                        isActiveButton &&
                                            'load-more-button--active',
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    type="button"
                                    value={page}
                                    onClick={(event) =>
                                        handleButtonClick(event)
                                    }
                                    key={page}
                                >
                                    {page}
                                </button>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

export default PaginationPages
