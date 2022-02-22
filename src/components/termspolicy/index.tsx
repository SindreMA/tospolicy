import Radio from '@mui/material/Radio/Radio'
import q from 'qjuul'
import React from 'react'
import ReactMarkdown from 'react-markdown'

interface ITextDisplay {
    title: string
    text: string
}

interface IProps {
    tos: ITextDisplay[]
    privacy: ITextDisplay[]
}

const TermsPolicyPage = (props: IProps) => {

    const renderTextDisplay = (textDisplay: ITextDisplay[]) => {
        return textDisplay.map(x=> (
            <q.div>
                <q.div frcl>
                    <Radio checked size="small" />
                    <q.h3>{x.title}</q.h3>
                </q.div>
                <q.div pa={'0 0 0 25px'}>
                    <ReactMarkdown>{x.text}</ReactMarkdown>
                </q.div>
            </q.div>
        ))
    }
    


  return (
    <q.div f1 h100 w100 frtl txal={'left'} fsa fw>
        <q.div fccl pa="25px" maxw={'500px'}>
            <q.h2>Terms of service</q.h2>
            {renderTextDisplay(props.tos)}
        </q.div>
        <q.div  fccl pa="25px" maxw={'500px'} >
            <q.h2>Privacy policies</q.h2>
            {renderTextDisplay(props.privacy)}
        </q.div>
    </q.div>
  )
}

export default TermsPolicyPage