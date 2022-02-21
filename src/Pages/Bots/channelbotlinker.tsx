import React from 'react'
import TermsPolicyPage from '../../components/termspolicy'

function ChannelBotLinkerTos() {

    const termsOfService = [
        {
            title: 'Tracking of your bot settings',
            text: `By using this bot, you agree to the following: \n
            - I allow this service to store the local bot settings for my server.\n
            * This includes:\n
                - Server ID\n
                - Message prefix (set by server admins) \n
                - Link mode (set by server admins) \n
                - All links setup, including Channel from ID and Channel to ID \n
            `

        }
    ]
    const privacyPolicy = [
        { 
            title: 'Storing of data',
            text: `This bot stores settings data for your discord server.\n
            - It does not store any user data at all.\n
            - This data is stored on the hosting server itself, in a json file.\n
            - The data is NOT encrypted on the server.\n
              As the data is not sensitive and is closed off, it is not a security risk.\n
            `
        }
    ]

  return (
      <TermsPolicyPage tos={termsOfService} privacy={privacyPolicy} />
  )
}

export default ChannelBotLinkerTos