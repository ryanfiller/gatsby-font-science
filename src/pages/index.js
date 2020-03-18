import React from 'react'
import Helmet from 'react-helmet'

import './styles.scss'
import Font from '../fonts/ScienceGothicVF.ttf'

const IndexPage = () => (
  <>
   <Helmet>
      <link
        rel='prerender'
        as='font'
        href={Font}
        type='font/ttf'
      />
    </Helmet>
    <h1>
      <span>
        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
      </span>
      <span>
        0123456789
      </span>
      <span>
        !@#$%&*_+-=?[]{}()
      </span>
    </h1>
  </>
)

export default IndexPage
