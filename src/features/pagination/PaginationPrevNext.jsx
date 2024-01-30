import { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'

function PaginationPrevNext({ mockedPeopleData, firstPage, limitPerPage }) {
    const [allProfiles, setAllProfiles] = useState(null)
    const [page, setPage] = useState(firstPage)
    const [profilesInView, setProfilesInView] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            let profiles = allProfiles
            if (!profiles) {
                profiles = mockedPeopleData
                setAllProfiles(profiles)
            }
            const start = firstPage * limitPerPage
            const end = start + limitPerPage
            setProfilesInView(profiles.slice(start, end))
        }, 2000)

        return () => clearTimeout(timerId)
    }, [allProfiles, mockedPeopleData, firstPage, limitPerPage])

    const handleButtonClick = (event) => {
        const { value } = event.target
        const newPage = value === 'previous' ? page - 1 : page + 1
        const start = newPage * limitPerPage
        const end = start + limitPerPage

        setProfilesInView(allProfiles.slice(start, end))
        setPage(newPage)
    }

    return (
        <div className="job-board-wrapper">
            <h2 style={{ color: 'tomato' }}>
                Pagination - Previous/Next Buttons
            </h2>
            {allProfiles === null ? (
                <p className="loading">Loading...</p>
            ) : (
                <>
                    {profilesInView.map((profile, index) => (
                        <ProfileCard
                            key={`${profile.name}${(index += 1)}`}
                            {...profile}
                        />
                    ))}
                    <div className="button-container">
                        <button
                            className="load-more-button"
                            type="button"
                            id="previous"
                            value="previous"
                            onClick={(event) => handleButtonClick(event)}
                            disabled={page - 1 < 0}
                        >
                            Previous
                        </button>
                        <button
                            className="load-more-button"
                            type="button"
                            id="next"
                            value="next"
                            onClick={(event) => handleButtonClick(event)}
                            disabled={
                                allProfiles &&
                                (page + 1) * limitPerPage > allProfiles.length
                            }
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default PaginationPrevNext
