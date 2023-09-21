import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare, FaUserGroup } from 'react-icons/fa6'
import {
  ProfileContainer,
  ProfileDescriptionContainer,
  ProfileGithubLink,
  ProfileDetailsContainer,
} from './styles'
import { InfoIcon } from '../../../../components/InfoIcon'
import { useEffect, useState } from 'react'

interface Profile {
  avatar_url: string
  bio: string
  name: string
  login: string
  followers: number
  html_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null)

  async function getProfileData() {
    const response = await fetch('https://api.github.com/users/jessicaranft')
    const data = await response.json()

    // console.log(data)
    setProfile(data)
  }

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {profile && (
        <>
          <img src={profile.avatar_url} alt="" />

          <ProfileDescriptionContainer>
            <ProfileGithubLink
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
            >
              Github
              <FaArrowUpRightFromSquare size={12} />
            </ProfileGithubLink>

            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>

            <ProfileDetailsContainer>
              <InfoIcon
                icon={<FaGithub size={18} />}
                content={profile.login}
                variant="white"
              />

              <InfoIcon
                icon={<FaUserGroup size={18} />}
                content={`${profile.followers} followers`}
                variant="white"
              />
            </ProfileDetailsContainer>
          </ProfileDescriptionContainer>
        </>
      )}
    </ProfileContainer>
  )
}
