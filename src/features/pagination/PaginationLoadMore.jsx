import { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'

function PaginationLoadMore({ mockedPeopleData, firstPage, limitPerPage }) {
    const [fetchingProfiles, setFetchingProfiles] = useState(false)
    const [page, setPage] = useState(firstPage)
    const [profilesInView, setProfilesInView] = useState([])
    const [allProfiles, setAllProfiles] = useState(null)

    useEffect(() => {
        setFetchingProfiles(true)
        let profiles = allProfiles
        if (!allProfiles) {
            profiles = mockedPeopleData.slice(0, 3)
            setAllProfiles(profiles)
        }
        const start = firstPage * limitPerPage
        const end = start + limitPerPage

        setProfilesInView([...profiles.slice(start, end)])
        setFetchingProfiles(false)
    }, [allProfiles, mockedPeopleData, firstPage, limitPerPage])

    const handleButtonClick = () => {
        const nextPage = page + 1

        setFetchingProfiles(true)
        let profiles = allProfiles
        const start = nextPage * limitPerPage
        const end = start + limitPerPage

        setProfilesInView([...profilesInView, ...profiles.slice(start, end)])
        setFetchingProfiles(false)
        setPage(nextPage)
    }

    return (
        <div className="job-board-wrapper">
            <h2 style={{ color: 'tomato' }}>Profiles - Load More Button</h2>
            {allProfiles === null ? (
                <p className="loading">Loading</p>
            ) : (
                <>
                    {profilesInView.map((profile, index) => (
                        <ProfileCard
                            {...profile}
                            key={`${profile.name}${index}`}
                        />
                    ))}
                    <div>
                        {profilesInView.length > 0 &&
                            page * limitPerPage + limitPerPage <
                                allProfiles.length && (
                                <button
                                    className="load-more-button"
                                    type="button"
                                    disabled={fetchingProfiles}
                                    onClick={() => handleButtonClick()}
                                >
                                    {fetchingProfiles
                                        ? 'Loading...'
                                        : 'Load More Profiles'}
                                </button>
                            )}
                    </div>
                </>
            )}
        </div>
    )
}

export default PaginationLoadMore
