import React from 'react'
import ReactMarkdown from 'react-markdown'
import Grid from './Grid'

export default ({ artist }) => (
  <article>
    <ReactMarkdown className='react-markdown' source={artist.bio} />
    <h2>Records:</h2>

    <Grid entries={artist.records} type='records' />
  </article>
)
