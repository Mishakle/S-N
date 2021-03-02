import profileInfoClasses from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ilia_Efimovich_Repin_%281844-1930%29_-_Volga_Boatmen_%281870-1873%29.jpg/1200px-Ilia_Efimovich_Repin_%281844-1930%29_-_Volga_Boatmen_%281870-1873%29.jpg'></img>
            </div>
            <div className={profileInfoClasses.descriptionBlock}>
                ava+descr
            </div>
        </div>
    )
}

export default ProfileInfo;