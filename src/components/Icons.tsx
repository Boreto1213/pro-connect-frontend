import {
  LucideProps,
  Home,
  Lightbulb,
  Users,
  MessageCircle,
  PackagePlus,
  BarChart4,
  HelpCircle,
  Sun,
  Moon,
  SunMoon,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  User,
  Star,
  ThumbsUp,
  ThumbsDown,
  ShieldCheck,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  Clipboard,
  X,
  Menu,
  Trash2,
  FileEdit,
  DollarSign,
  PartyPopper
} from 'lucide-react'

export const Icons = {
  Logo: (props: LucideProps) => (
    <svg
      {...props}
      height='60px'
      width='60px'
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 59 59'
      xmlSpace='preserve'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <g>
          {' '}
          <g>
            {' '}
            <path
              style={{ fill: '#14b8a5' }}
              d='M13,16.81c0-2.104,1.706-3.81,3.81-3.81H47V4.81C47,2.706,45.294,1,43.19,1H4.81 C2.706,1,1,2.706,1,4.81v38.38C1,45.294,2.706,47,4.81,47H13V16.81z'
            ></path>{' '}
            <path
              style={{ fill: '#26B99A' }}
              d='M14,48H4.81C2.157,48,0,45.842,0,43.19V4.81C0,2.158,2.157,0,4.81,0H43.19 C45.843,0,48,2.158,48,4.81V14H16.81C15.261,14,14,15.261,14,16.81V48z M4.81,2C3.261,2,2,3.261,2,4.81v38.38 C2,44.739,3.261,46,4.81,46H12V16.81c0-2.652,2.157-4.81,4.81-4.81H46V4.81C46,3.261,44.739,2,43.19,2H4.81z'
            ></path>{' '}
          </g>{' '}
          <path
            style={{ fill: '#64748b' }}
            d='M55.19,59H16.81C14.706,59,13,57.294,13,55.19V16.81c0-2.104,1.706-3.81,3.81-3.81h38.38 c2.104,0,3.81,1.706,3.81,3.81v38.38C59,57.294,57.294,59,55.19,59z'
          ></path>{' '}
        </g>{' '}
      </g>
    </svg>
  ),
  Idea: (props: LucideProps) => (
    <svg
      {...props}
      width='256px'
      height='256px'
      viewBox='-3.2 -3.2 38.40 38.40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform='rotate(0)matrix(1, 0, 0, 1, 0, 0)'
      stroke='#000000'
      strokeWidth='0.00032'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          d='M22.63 4.81C21.7696 3.92124 20.7393 3.2145 19.6003 2.73177C18.4614 2.24905 17.237 2.0002 16 2C13.6131 2 11.3239 2.94821 9.63604 4.63604C7.94821 6.32387 7 8.61305 7 11C7.08565 12.681 7.56521 14.3184 8.4 15.78C8.66 16.32 8.9 16.84 9.1 17.37L11.1 22.37C11.1721 22.5514 11.2958 22.7077 11.4557 22.8197C11.6157 22.9316 11.8049 22.9943 12 23H20C20.2003 23.0002 20.396 22.9402 20.5618 22.8279C20.7276 22.7156 20.8559 22.5561 20.93 22.37L22.93 17.37C23.15 16.8 23.39 16.27 23.63 15.75C24.4114 14.2789 24.878 12.6613 25 11C25.0449 9.86149 24.8579 8.72574 24.4505 7.66167C24.0431 6.5976 23.4237 5.62742 22.63 4.81Z'
          fill='#14b8a5'
        ></path>{' '}
        <path
          d='M20 24H12C11.7348 24 11.4804 24.1054 11.2929 24.2929C11.1054 24.4804 11 24.7348 11 25V28C10.9996 28.1874 11.0519 28.3712 11.1509 28.5303C11.25 28.6894 11.3917 28.8175 11.56 28.9L13.56 29.9C13.6971 29.9664 13.8476 30.0006 14 30H18C18.1557 30.0022 18.3098 29.9679 18.45 29.9L20.45 28.9C20.6164 28.8161 20.7561 28.6874 20.8533 28.5284C20.9505 28.3694 21.0013 28.1864 21 28V25C21 24.7348 20.8946 24.4804 20.7071 24.2929C20.5196 24.1054 20.2652 24 20 24Z'
          fill='#64748b'
        ></path>{' '}
        <path
          d='M20 14H12C11.8301 14.0003 11.6628 13.9574 11.5141 13.8751C11.3654 13.7929 11.2401 13.6741 11.15 13.53C11.0622 13.378 11.016 13.2055 11.016 13.03C11.016 12.8545 11.0622 12.682 11.15 12.53L13.15 8.53C13.2326 8.37471 13.3546 8.24395 13.5038 8.1509C13.6531 8.05785 13.8242 8.0058 14 8H18C18.2652 8 18.5196 8.10536 18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9C19 9.26522 18.8946 9.51957 18.7071 9.70711C18.5196 9.89464 18.2652 10 18 10H14.65L13.65 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13C21 13.2652 20.8946 13.5196 20.7071 13.7071C20.5196 13.8946 20.2652 14 20 14Z'
          fill='#FAFAFA'
        ></path>{' '}
        <path
          d='M16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V13C15 12.7348 15.1054 12.4804 15.2929 12.2929C15.4804 12.1054 15.7348 12 16 12C16.2652 12 16.5196 12.1054 16.7071 12.2929C16.8946 12.4804 17 12.7348 17 13V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18Z'
          fill='#FAFAFA'
        ></path>{' '}
        <path
          d='M16 2C13.6131 2 11.3239 2.94821 9.63604 4.63604C7.94821 6.32387 7 8.61305 7 11C7.08237 12.6744 7.55128 14.3071 8.37 15.77C8.63072 16.2909 8.86436 16.825 9.07 17.37L11.07 22.37C11.1441 22.5561 11.2724 22.7156 11.4382 22.8279C11.604 22.9402 11.7997 23.0002 12 23H16V2Z'
          fill='#8ADDD6'
        ></path>{' '}
        <path
          d='M12 24C11.7348 24 11.4804 24.1054 11.2929 24.2929C11.1054 24.4804 11 24.7348 11 25V28C11.0006 28.1847 11.0522 28.3656 11.1493 28.5227C11.2464 28.6798 11.3851 28.8069 11.55 28.89L13.55 29.89C13.6893 29.9614 13.8435 29.9991 14 30H16V24H12Z'
          fill='#8d96a5'
        ></path>{' '}
        <path
          d='M18 10C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8H16V10H18Z'
          fill='#64748b'
        ></path>{' '}
        <path
          d='M20 12H16V14H20C20.2652 14 20.5196 13.8946 20.7071 13.7071C20.8946 13.5196 21 13.2652 21 13C21 12.7348 20.8946 12.4804 20.7071 12.2929C20.5196 12.1054 20.2652 12 20 12Z'
          fill='#64748b'
        ></path>{' '}
        <path
          d='M13.6 12L14.6 10H16V8.00002H14C13.8136 7.99873 13.6306 8.04954 13.4716 8.14672C13.3126 8.2439 13.1839 8.38359 13.1 8.55002L11.1 12.55C11.0197 12.7064 10.9821 12.8812 10.9908 13.0567C10.9996 13.2323 11.0545 13.4024 11.15 13.55C11.2424 13.6904 11.3688 13.8053 11.5173 13.8839C11.6659 13.9626 11.8319 14.0025 12 14H16V12H13.6Z'
          fill='#8d96a5'
        ></path>{' '}
        <path
          d='M15 13V17C15 17.2652 15.1054 17.5196 15.2929 17.7071C15.4804 17.8946 15.7348 18 16 18V12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13Z'
          fill='#8d96a5'
        ></path>{' '}
        <path
          d='M16 12V18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12Z'
          fill='#64748b'
        ></path>{' '}
      </g>
    </svg>
  ),
  Unauthorized: (props: LucideProps) => (
    <svg
      {...props}
      height='200px'
      width='200px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          style={{ fill: '#8ADDD6' }}
          d='M512,335.038c0-48.214-32.226-92.122-78.369-106.781l-16.51-5.243l-0.834-17.303 c-3.802-78.912-68.714-140.728-147.778-140.728c-70.521,0-131.577,50.199-145.176,119.361l-3.348,17.03l-17.135,2.761 C44.217,213.586,0,265.46,0,324.798c0,67.391,54.828,122.218,122.219,122.218h277.804C461.767,447.016,512,396.782,512,335.038z'
        ></path>{' '}
        <path
          style={{ fill: '#14b8a5' }}
          d='M433.631,228.257l-16.51-5.243l-0.834-17.303c-3.802-78.912-68.714-140.728-147.778-140.728 c-4.703,0-9.359,0.24-13.966,0.677v381.357h145.48c61.745,0,111.977-50.234,111.977-111.978 C512,286.824,479.774,242.917,433.631,228.257z'
        ></path>{' '}
        <path
          style={{ fill: '#8d96a5' }}
          d='M197.818,237.562v69.818c0,46.545,58.182,69.818,58.182,69.818s58.182-23.273,58.182-69.818v-69.818 H197.818z'
        ></path>{' '}
        <path
          style={{ fill: '#64748b' }}
          d='M256,377.198c0,0,58.182-23.273,58.182-69.818v-69.818h-59.64'
        ></path>{' '}
        <path
          style={{ fill: '#FFFFFF' }}
          d='M256,395.998l-6.483-2.594c-2.824-1.13-69.154-28.324-69.154-86.024v-87.273h151.273v87.273 c0,57.7-66.33,84.894-69.154,86.024L256,395.998z M215.273,255.016v52.364c0,13.537,7.375,26.401,21.923,38.235 c6.879,5.597,13.904,9.715,18.807,12.276c12.938-6.749,40.726-24.298,40.726-50.511v-52.364H215.273z'
        ></path>{' '}
      </g>
    </svg>
  ),
  NotFound: (props: LucideProps) => (
    <svg
      {...props}
      height='200px'
      width='200px'
      viewBox='0 0 64 64'
      id='svg5'
      version='1.1'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <defs id='defs2'></defs>{' '}
        <g id='layer1' transform='translate(-384,-96)'>
          {' '}
          <path
            d='m 393.99999,105 h 49 v 6 h -49 z'
            id='path27804'
            style={{
              fill: '#3e4f59',
              fillOpacity: 1,
              fillRule: 'evenodd',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
          ></path>{' '}
          <path
            d='m 393.99999,111 h 49 v 40 h -49 z'
            id='path27806'
            style={{
              fill: '#acbec2',
              fillOpacity: 1,
              fillRule: 'evenodd',
              strokeWidth: '2.00001',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
          ></path>{' '}
          <path
            d='m 393.99999,111 v 40 h 29.76954 a 28.484051,41.392605 35.599482 0 0 18.625,-40 z'
            id='path27808'
            style={{
              fill: '#e8edee',
              fillOpacity: 1,
              fillRule: 'evenodd',
              stroke: 'none',
              strokeWidth: '2.00002',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
          ></path>{' '}
          <path
            d='m 395.99999,104 c -1.64501,0 -3,1.355 -3,3 v 40 c 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 v -40 c 0,-0.56413 0.43587,-1 1,-1 h 45 c 0.56414,0 1,0.43587 1,1 v 3 h -42 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 h 42 v 37 c 0,0.56413 -0.43586,1 -1,1 h -49 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 h 49 c 1.64501,0 3,-1.35499 3,-3 0,-14 0,-28 0,-42 0,-1.645 -1.35499,-3 -3,-3 z'
            id='path27810'
            style={{
              color: '#000000',
              fill: '#000000',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
          ></path>{' '}
          <path
            d='m 438.99999,107 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 0,-0.55228 -0.44771,-1 -1,-1 z'
            id='path27812'
            style={{
              color: '#000000',
              fill: '#ed7161',
              fillOpacity: 1,
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
              stroke: 'none', // Assuming '-inkscape-stroke' translates to the standard 'stroke'
            }}
          ></path>{' '}
          <path
            d='m 434.99999,107 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 0,-0.55228 -0.44771,-1 -1,-1 z'
            id='path27814'
            style={{
              color: '#000000',
              fill: '#ecba16',
              fillOpacity: 1,
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
              stroke: 'none', // Assuming '-inkscape-stroke' translates to the standard 'stroke'
            }}
          ></path>{' '}
          <path
            d='m 430.99999,107 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 0,-0.55228 -0.44771,-1 -1,-1 z'
            id='path27816'
            style={{
              color: '#000000',
              fill: '#42b05c',
              fillOpacity: 1,
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
              stroke: 'none', // Assuming '-inkscape-stroke' translates to the standard 'stroke'
            }}
          ></path>{' '}
          <path
            d='m 388.99999,150 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z'
            id='path27818'
            style={{
              color: '#000000',
              fill: '#000000',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
              stroke: 'none', // Assuming '-inkscape-stroke' is equivalent to 'stroke'
            }}
          ></path>{' '}
          <path
            d='m 396.99999,110 c -0.55228,0 -1,0.44772 -1,1 0,0.55229 0.44772,1 1,1 0.55229,0 1,-0.44771 1,-1 0,-0.55228 -0.44771,-1 -1,-1 z'
            id='path27820'
            style={{
              color: '#000000',
              fill: '#000000',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: '4.1',
              stroke: 'none', // Adding Webkit vendor prefix if needed
            }}
          ></path>{' '}
          <rect
            height='22'
            id='rect4427'
            rx='2'
            ry='2'
            style={{
              fill: '#227b76',
              fillOpacity: 1,
              fillRule: 'evenodd',
              stroke: 'none',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
            width='29'
            x='404'
            y='120'
          ></rect>{' '}
          <path
            d='m 406,120 c -1.108,0 -2,0.892 -2,2 v 18 c 0,1.108 0.892,2 2,2 h 19.58398 A 19.317461,16.374676 0 0 0 430.2207,131.36719 19.317461,16.374676 0 0 0 424.80273,120 Z'
            id='path27648'
            style={{
              fill: '#8ADDD6',
              fillOpacity: 1,
              fillRule: 'evenodd',
              stroke: 'none',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
          ></path>{' '}
          <rect
            height='6'
            id='rect8552'
            style={{
              fill: '#227b76',
              fillOpacity: 1,
              fillRule: 'evenodd',
              stroke: 'none', // Adding missing stroke property with value 'none'
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
            width='29'
            x='404'
            y='120'
          ></rect>{' '}
          <path
            d='m 404,120 v 6 h 24.58984 a 14,8.5 0 0 0 0.10938,-1 14,8.5 0 0 0 -2.67969,-5 z'
            id='path8626'
            style={{
              fill: '#8ADDD6',
              fillOpacity: 1,
              fillRule: 'evenodd',
              stroke: 'none', // Adding missing stroke property with value 'none'
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
          ></path>{' '}
          <g id='path4429' transform='translate(0,-4)'>
            {' '}
            <path
              d='m 404,130 h 29'
              id='path7162'
              style={{
                color: '#000000',
                fill: '#918383',
                fillRule: 'evenodd',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4.1,
                stroke: 'none', // Adding Webkit vendor prefix if needed
              }}
            ></path>{' '}
            <path
              d='m 406,123 c -1.6447,0 -3,1.3553 -3,3 0,1.97201 0,3.94401 0,5.91602 0,0.55228 0.44772,1 1,1 0.55228,0 1,-0.44772 1,-1 V 131 h 27 v 6 c 0,0.55228 0.44772,1 1,1 0.55228,0 1,-0.44772 1,-1 0,-3.66667 0,-7.33333 0,-11 0,-1.6447 -1.3553,-3 -3,-3 z m 0,2 h 25 c 0.5713,0 1,0.4287 1,1 v 3 h -27 v -3 c 0,-0.5713 0.4287,-1 1,-1 z m -2,10 c -0.55228,0 -1,0.44772 -1,1 v 8 c 0,1.6447 1.3553,3 3,3 h 25 c 1.6447,0 3,-1.3553 3,-3 v -3 c 0,-0.55228 -0.44772,-1 -1,-1 -0.55228,0 -1,0.44772 -1,1 v 3 c 0,0.5713 -0.4287,1 -1,1 h -25 c -0.5713,0 -1,-0.4287 -1,-1 v -8 c 0,-0.55228 -0.44772,-1 -1,-1 z'
              id='path7164'
              style={{
                color: '#000000',
                fill: '#000000',
                fillRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4.1,
                stroke: 'none', // Adding Webkit vendor prefix if needed
              }}
            ></path>{' '}
          </g>{' '}
          <path
            d='m 409.93555,129.00195 c -0.45187,0.0293 -0.82765,0.35863 -0.91602,0.80274 l -1,5 C 407.89645,135.42313 408.36944,135.99975 409,136 h 3 v 2 c 0,0.55228 0.44772,1 1,1 0.55228,0 1,-0.44772 1,-1 0,-1.66667 0,-3.33333 0,-5 0,-0.55228 -0.44772,-1 -1,-1 -0.55228,0 -1,0.44772 -1,1 v 1 h -1.78125 l 0.76172,-3.80469 c 0.10771,-0.54147 -0.24375,-1.06778 -0.78516,-1.17578 -0.0854,-0.0172 -0.17278,-0.0231 -0.25976,-0.0176 z'
            id='path8873'
            style={{
              color: '#000000',
              fill: '#000000',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
              stroke: 'none', // Adding Webkit vendor prefix if needed
            }}
          ></path>{' '}
          <path
            d='m 418.99999,130 c 1.10801,0 2.00002,0.89201 2.00002,2.00002 v 2.99996 c 0,1.10801 -0.89201,2.00002 -2.00002,2.00002 -1.10801,0 -2.00002,-0.89201 -2.00002,-2.00002 v -2.99996 c 0,-1.10801 0.89201,-2.00002 2.00002,-2.00002 z'
            id='rect5745'
            style={{
              fill: '#ffc343',
              fillOpacity: 1,
              fillRule: 'evenodd',
              stroke: 'none',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
            }}
          ></path>{' '}
          <path
            d='m 419,129 c -1.64471,0 -3,1.35529 -3,3 v 3 c 0,1.64471 1.35529,3 3,3 1.64471,0 3,-1.35529 3,-3 v -3 a 1,1 0 0 0 -1,-1 1,1 0 0 0 -1,1 v 3 c 0,0.57131 -0.42869,1 -1,1 -0.57131,0 -1,-0.42869 -1,-1 v -3 c 0,-0.57131 0.42869,-1 1,-1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z'
            id='path7169'
            style={{
              color: '#000000',
              fill: '#000000',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
              stroke: 'none', // Adding Webkit vendor prefix if needed
            }}
          ></path>{' '}
          <path
            d='m 425.93555,129.00195 c -0.45187,0.0293 -0.82765,0.35863 -0.91602,0.80274 l -1,5 C 423.89645,135.42313 424.36944,135.99975 425,136 h 3 v 2 c 0,0.55228 0.44772,1 1,1 0.55228,0 1,-0.44772 1,-1 0,-1.66667 0,-3.33333 0,-5 0,-0.55228 -0.44772,-1 -1,-1 -0.55228,0 -1,0.44772 -1,1 v 1 h -1.78125 l 0.76172,-3.80469 c 0.10771,-0.54147 -0.24375,-1.06778 -0.78516,-1.17578 -0.0854,-0.0172 -0.17278,-0.0231 -0.25976,-0.0176 z'
            id='path69785'
            style={{
              color: '#000000',
              fill: '#000000',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4.1,
              stroke: 'none', // Adding Webkit vendor prefix if needed
            }}
          ></path>{' '}
        </g>{' '}
      </g>
    </svg>
  ),
  Home, // Home
  Lightbulb, // Explore services
  Users, // Search for experts
  MessageCircle, // Chats
  PackagePlus, // Create new service (only for expers)
  BarChart4, // Statistics
  HelpCircle, // About
  Sun,
  Moon,
  SunMoon,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  User,
  Star,
  ThumbsUp,
  ThumbsDown,
  ShieldCheck,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  Clipboard,
  X,
  Menu,
  Trash2,
  FileEdit,
  DollarSign,
  PartyPopper
}

export type Icon = keyof typeof Icons
