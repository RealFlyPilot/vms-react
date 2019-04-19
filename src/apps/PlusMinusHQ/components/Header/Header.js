import React, { Component } from 'react'
import { Authenticator, SignOut } from 'aws-amplify-react'
import { Avatar, RaisedContainer, ShowMore } from 'react-zeit-components'
import './index.scss'

export class Header extends Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render () {
    return (
      <header className='pm-hq header' style={{ marginTop: '20px' }}>
        <div className='pm-hq menu'>
          <h2 className='pm-hq header-logo'>
            <div className='jsx-1702738178 breadcrumb'>
              <div className='jsx-3977622176 breadcrumb'>
                <div className='jsx-900906369 item'>
                  <div className='jsx-4188800376 trigger team-picker-menu' />
                  <span className='jsx-3194330087 divider'>
                    <svg
                      width='10px'
                      height='26px'
                      viewBox='0 0 10 26'
                      version='1.1'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      aria-label='divider'
                    >
                      <path d='M8.48 1.14l-7 24' stroke='#eaeaea' strokeWidth='1' fill='none' />
                    </svg>
                  </span>
                  <a className='jsx-1702738178 settings' href='/account'>
                    <svg
                      width='17px'
                      height='16px'
                      viewBox='0 0 17 16'
                      version='1.1'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      aria-label='configuration'
                    >
                      <path
                        d='M15 9.5l-1.28.2c-.12.4-.27.78-.46 1.13l.75 1.06c.4.35.4 1 0 1.4l-.7.7c-.4.4-1 .4-1.4 0l-1.04-.77c-.35.2-.72.34-1.12.46l-.2 1.3c0 .53-.45 1-1 1h-1c-.55 0-1-.47-1-1l-.2-1.3c-.4-.1-.78-.27-1.13-.46l-1.06.75c-.38.4-1 .4-1.4 0l-.7-.7c-.4-.4-.4-1.03 0-1.4l.74-1.08c-.2-.35-.34-.72-.46-1.12l-1.26-.2c-.55 0-1-.43-1-1v-1c0-.53.45-1 1-1l1.28-.2c.13-.4.28-.76.47-1.12L2.08 4.1c-.4-.38-.4-1 0-1.4l.7-.7c.4-.4 1.02-.4 1.4 0l1.07.74c.35-.2.7-.34 1.1-.46l.2-1.26c0-.55.47-1 1-1h1c.57 0 1 .45 1 1l.2 1.28c.4.13.8.28 1.15.47l1.06-.76c.4-.4 1-.4 1.4 0l.7.7c.4.4.4 1.03 0 1.4l-.73 1.07c.2.36.34.73.46 1.13l1.28.2c.56 0 1 .45 1 1v1c0 .55-.44 1-1 1L15 9.5zm-.42-1.98l-1.57-.26a5.14 5.14 0 0 0-.9-2.2l.92-1.28c.2-.2.2-.52 0-.7-.2-.2-.5-.2-.7 0l-1.3.92a4.99 4.99 0 0 0-2.2-.9l-.25-1.58c0-.28-.22-.5-.5-.5s-.5.22-.5.5L7.32 3.1c-.8.12-1.55.44-2.18.9l-1.3-.93c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.92 1.3c-.47.64-.8 1.38-.9 2.2l-1.58.25c-.28 0-.5.22-.5.5s.22.5.5.5l1.57.26c.12.8.44 1.55.9 2.18l-.92 1.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0l1.3-.92c.64.46 1.38.78 2.2.9l.25 1.58c0 .28.22.5.5.5s.5-.22.5-.5l.26-1.58c.8-.12 1.55-.44 2.18-.9l1.3.93c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-.92-1.3c.47-.64.8-1.38.9-2.2l1.58-.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM8 10.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm0-4c-.83 0-1.5.67-1.5 1.5S7.17 9.5 8 9.5 9.5 8.83 9.5 8 8.83 6.5 8 6.5z'
                        fill='#999'
                        fill-rule='nonzero'
                      />
                    </svg>
                  </a>
                  <a className='jsx-1702738178 plan' href='/account/plan'>
                    Plus Minus HQ
                  </a>
                </div>
              </div>
            </div>
          </h2>

          <div className='pm-hq menu-inner'>
            <div className='pm-hq logo' />

            <ul className='pm-hq items'>
              <li className='pm-hq item active'>
                <a className='pm-hq' href='/dashboard'>
                  Dashboard
                </a>
              </li>
              <li className='pm-hq item'>
                <a className='pm-hq' href='/dashboard/projects'>
                  Projects
                </a>
              </li>
              <li className='pm-hq item'>
                <a className='pm-hq' href='/dashboard/events'>
                  Acceleration
                </a>
              </li>
              <li className='pm-hq item'>
                <a className='pm-hq' href='/dashboard/domains'>
                  Components
                </a>
              </li>
              <li className='pm-hq item'>
                <a className='pm-hq' href='/dashboard/certs'>
                  StyleGuide Generator
                </a>
              </li>
              <li className='pm-hq item'>
                <a className='pm-hq' href='/dashboard/usage'>
                  Airtable
                </a>
              </li>
              <li className='pm-hq item'>
                <a className='pm-hq' href='/dashboard/usage'>
                  Mason
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
{
  /*
//  <ShowMore>
//                       <div style={{ padding: 20, textAlign: 'center' }}>
//                         <div className='jsx-4188800376'>
//                           <span className='jsx-420518294 name'>monichre</span>

//                             <span className='jsx-420518294 user has-name'>
//                               <span className='jsx-420518294 avatar'>
//                                 <span className='jsx-1760267983 '>
//                                   <Avatar />
//                                 </span>
//                               </span>

//                             </span>

//                         </div>

//                         <span className='jsx-4188800376 dropdown'>
//                           <span className='jsx-4188800376 arrow'>
//                             <svg
//                               width='7'
//                               height='17'
//                               viewBox='0 0 7 12'
//                               fill='none'
//                               xmlns='http://www.w3.org/2000/svg'
//                               aria-label='arrow double'
//                             >
//                               <path
//                                 d='M0.642491 3.35053L0.292945 3.70804L1.00798 4.40714L1.35752 4.04962L0.642491 3.35053ZM3.75752 1.59491L4.10707 1.23739L3.39204 0.538299L3.04249 0.895815L3.75752 1.59491ZM5.58506 4.04651L5.93149 4.40704L6.65256 3.71417L6.30613 3.35364L5.58506 4.04651ZM3.95354 0.9053L3.6071 0.544767L2.88604 1.23763L3.23247 1.59817L3.95354 0.9053ZM1.35752 7.95041L1.00797 7.59289L0.292938 8.29198L0.642485 8.6495L1.35752 7.95041ZM3.04248 11.1042L3.39203 11.4617L4.10706 10.7626L3.75751 10.4051L3.04248 11.1042ZM6.36054 8.64636L6.70697 8.28583L5.98591 7.59296L5.63947 7.95349L6.36054 8.64636ZM3.28688 10.4018L2.94045 10.7624L3.66152 11.4552L4.00795 11.0947L3.28688 10.4018ZM1.35752 4.04962L3.75752 1.59491L3.04249 0.895815L0.642491 3.35053L1.35752 4.04962ZM6.30613 3.35364L3.95354 0.9053L3.23247 1.59817L5.58506 4.04651L6.30613 3.35364ZM0.642485 8.6495L3.04248 11.1042L3.75751 10.4051L1.35752 7.95041L0.642485 8.6495ZM5.63947 7.95349L3.28688 10.4018L4.00795 11.0947L6.36054 8.64636L5.63947 7.95349Z'
//                                 fill='#999999'
//                               />
//                             </svg>
//                           </span>
//                         </span>
//                       </div>
//                     </ShowMore> */
}
