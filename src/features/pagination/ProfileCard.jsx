function ProfileCard({ name, title, age, workdays }) {
    return (
        <div className="job-card">
            <p className="job-title">
                {name} &middot; ({title})
            </p>
            <div className="job-detail-container">
                <p className="job-detail">
                    Age: {age}{' '}
                    {workdays.length
                        ? `Days of work: ${workdays.join(' ')}`
                        : ' '}
                </p>
            </div>
        </div>
    )
}
export default ProfileCard
