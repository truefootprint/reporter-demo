const Logo = ({ variant }) => {
  let width, text;

  if (variant === "inlineText") {
    width = 289;
    text = <path d="M39.632,51 L39.632,23.148 L34.572,23.148 L34.572,18 L49.884,18 L49.884,23.148 L44.78,23.148 L44.78,51 L39.632,51 Z M61.456,26.58 L62.556,26.58 L62.556,31.42 L59.96,31.42 C58.2,31.42 57.144,32.344 57.144,34.06 L57.144,51 L52.348,51 L52.348,26.888 L57.144,26.888 L57.144,28.34 C58.2,27.196 59.696,26.58 61.456,26.58 Z M75.492,26.888 L80.332,26.888 L80.332,51 L75.492,51 L75.492,49.812 C74.48,50.956 73.028,51.572 71.18,51.572 C68.012,51.572 65.108,49.724 65.108,43.872 L65.108,26.888 L69.904,26.888 L69.904,43.872 C69.904,45.588 70.96,46.776 72.72,46.776 C74.48,46.776 75.492,45.588 75.492,43.872 L75.492,26.888 Z M100.396,40.088 L89.924,40.088 L89.924,43.872 C89.924,45.588 90.98,46.776 92.784,46.776 C94.544,46.776 95.6,45.588 95.6,43.872 L95.6,43.08 L100.396,43.08 L100.396,43.52 C100.396,48.36 97.404,51.572 92.784,51.572 C88.12,51.572 85.128,48.36 85.128,43.52 L85.128,34.368 C85.128,29.572 88.12,26.316 92.784,26.316 C97.404,26.316 100.396,29.572 100.396,34.368 L100.396,40.088 Z M92.784,31.156 C90.98,31.156 89.924,32.3 89.924,34.016 L89.924,35.6 L95.6,35.6 L95.6,34.016 C95.6,32.3 94.544,31.156 92.784,31.156 Z M106.468,51 L106.468,18 L119.668,18 L119.668,20.508 L108.932,20.508 L108.932,34.94 L118.48,34.94 L118.48,37.448 L108.932,37.448 L108.932,51 L106.468,51 Z M130.668,51.528 C126.268,51.528 123.144,48.448 123.144,43.872 L123.144,34.324 C123.144,29.792 126.268,26.712 130.668,26.712 C135.068,26.712 138.104,29.792 138.104,34.324 L138.104,43.872 C138.104,48.448 135.068,51.528 130.668,51.528 Z M130.668,49.02 C133.704,49.02 135.596,46.952 135.596,43.872 L135.596,34.324 C135.596,31.244 133.704,29.176 130.668,29.176 C127.632,29.176 125.608,31.244 125.608,34.324 L125.608,43.872 C125.608,46.952 127.632,49.02 130.668,49.02 Z M150.82,51.528 C146.42,51.528 143.296,48.448 143.296,43.872 L143.296,34.324 C143.296,29.792 146.42,26.712 150.82,26.712 C155.22,26.712 158.256,29.792 158.256,34.324 L158.256,43.872 C158.256,48.448 155.22,51.528 150.82,51.528 Z M150.82,49.02 C153.856,49.02 155.748,46.952 155.748,43.872 L155.748,34.324 C155.748,31.244 153.856,29.176 150.82,29.176 C147.784,29.176 145.76,31.244 145.76,34.324 L145.76,43.872 C145.76,46.952 147.784,49.02 150.82,49.02 Z M173.084,51.264 C168.596,51.264 165.604,48.052 165.604,43.168 L165.604,29.572 L161.204,29.572 L161.204,27.196 L165.604,27.196 L165.604,21.08 L168.068,21.08 L168.068,27.196 L174.404,27.196 L174.404,29.572 L168.068,29.572 L168.068,43.168 C168.068,46.556 170.092,48.756 173.084,48.756 L174.404,48.756 L174.404,51.264 L173.084,51.264 Z M186.108,26.712 C190.464,26.712 193.5,29.748 193.5,34.324 L193.5,43.872 C193.5,48.492 190.464,51.528 186.108,51.528 C183.952,51.528 182.236,50.648 181.092,49.196 L181.092,58.92 L178.628,58.92 L178.628,27.24 L181.092,27.24 L181.092,29.044 C182.236,27.592 183.952,26.712 186.108,26.712 Z M190.992,43.872 L190.992,34.324 C190.992,31.244 189.1,29.176 186.064,29.176 C182.896,29.176 181.092,31.244 181.092,34.324 L181.092,43.916 C181.092,46.996 182.896,49.02 186.064,49.02 C189.1,49.02 190.992,46.952 190.992,43.872 Z M207.008,26.976 L208.02,26.976 L208.02,29.44 L206.7,29.44 C203.796,29.44 201.86,31.508 201.86,34.588 L201.86,51 L199.396,51 L199.396,27.24 L201.86,27.24 L201.86,29.396 C203.048,27.856 204.808,26.976 207.008,26.976 Z M211.584,24.292 L211.584,19.32 L214.048,19.32 L214.048,24.292 L211.584,24.292 Z M211.584,51 L211.584,27.24 L214.048,27.24 L214.048,51 L211.584,51 Z M228.26,26.712 C232.396,26.712 235.168,29.748 235.168,34.324 L235.168,51 L232.66,51 L232.66,34.324 C232.66,31.244 230.768,29.176 227.952,29.176 C225.048,29.176 223.112,31.244 223.112,34.324 L223.112,51 L220.648,51 L220.648,27.24 L223.112,27.24 L223.112,29.132 C224.3,27.592 226.06,26.712 228.26,26.712 Z M250.392,51.264 C245.904,51.264 242.912,48.052 242.912,43.168 L242.912,29.572 L238.512,29.572 L238.512,27.196 L242.912,27.196 L242.912,21.08 L245.376,21.08 L245.376,27.196 L251.712,27.196 L251.712,29.572 L245.376,29.572 L245.376,43.168 C245.376,46.556 247.4,48.756 250.392,48.756 L251.712,48.756 L251.712,51.264 L250.392,51.264 Z" id="TrueFootprint-Copy-3" fill="#333333"></path>;
  } else if (variant === "stackedText") {
    width = 222;
    text = <path d="M42.632,33 L42.632,5.148 L37.572,5.148 L37.572,0 L52.884,0 L52.884,5.148 L47.78,5.148 L47.78,33 L42.632,33 Z M64.456,8.58 L65.556,8.58 L65.556,13.42 L62.96,13.42 C61.2,13.42 60.144,14.344 60.144,16.06 L60.144,33 L55.348,33 L55.348,8.888 L60.144,8.888 L60.144,10.34 C61.2,9.196 62.696,8.58 64.456,8.58 Z M78.492,8.888 L83.332,8.888 L83.332,33 L78.492,33 L78.492,31.812 C77.48,32.956 76.028,33.572 74.18,33.572 C71.012,33.572 68.108,31.724 68.108,25.872 L68.108,8.888 L72.904,8.888 L72.904,25.872 C72.904,27.588 73.96,28.776 75.72,28.776 C77.48,28.776 78.492,27.588 78.492,25.872 L78.492,8.888 Z M103.396,22.088 L92.924,22.088 L92.924,25.872 C92.924,27.588 93.98,28.776 95.784,28.776 C97.544,28.776 98.6,27.588 98.6,25.872 L98.6,25.08 L103.396,25.08 L103.396,25.52 C103.396,30.36 100.404,33.572 95.784,33.572 C91.12,33.572 88.128,30.36 88.128,25.52 L88.128,16.368 C88.128,11.572 91.12,8.316 95.784,8.316 C100.404,8.316 103.396,11.572 103.396,16.368 L103.396,22.088 Z M95.784,13.156 C93.98,13.156 92.924,14.3 92.924,16.016 L92.924,17.6 L98.6,17.6 L98.6,16.016 C98.6,14.3 97.544,13.156 95.784,13.156 Z M41.092,74 L41.092,41 L54.292,41 L54.292,43.508 L43.556,43.508 L43.556,57.94 L53.104,57.94 L53.104,60.448 L43.556,60.448 L43.556,74 L41.092,74 Z M65.292,74.528 C60.892,74.528 57.768,71.448 57.768,66.872 L57.768,57.324 C57.768,52.792 60.892,49.712 65.292,49.712 C69.692,49.712 72.728,52.792 72.728,57.324 L72.728,66.872 C72.728,71.448 69.692,74.528 65.292,74.528 Z M65.292,72.02 C68.328,72.02 70.22,69.952 70.22,66.872 L70.22,57.324 C70.22,54.244 68.328,52.176 65.292,52.176 C62.256,52.176 60.232,54.244 60.232,57.324 L60.232,66.872 C60.232,69.952 62.256,72.02 65.292,72.02 Z M85.444,74.528 C81.044,74.528 77.92,71.448 77.92,66.872 L77.92,57.324 C77.92,52.792 81.044,49.712 85.444,49.712 C89.844,49.712 92.88,52.792 92.88,57.324 L92.88,66.872 C92.88,71.448 89.844,74.528 85.444,74.528 Z M85.444,72.02 C88.48,72.02 90.372,69.952 90.372,66.872 L90.372,57.324 C90.372,54.244 88.48,52.176 85.444,52.176 C82.408,52.176 80.384,54.244 80.384,57.324 L80.384,66.872 C80.384,69.952 82.408,72.02 85.444,72.02 Z M107.708,74.264 C103.22,74.264 100.228,71.052 100.228,66.168 L100.228,52.572 L95.828,52.572 L95.828,50.196 L100.228,50.196 L100.228,44.08 L102.692,44.08 L102.692,50.196 L109.028,50.196 L109.028,52.572 L102.692,52.572 L102.692,66.168 C102.692,69.556 104.716,71.756 107.708,71.756 L109.028,71.756 L109.028,74.264 L107.708,74.264 Z M120.732,49.712 C125.088,49.712 128.124,52.748 128.124,57.324 L128.124,66.872 C128.124,71.492 125.088,74.528 120.732,74.528 C118.576,74.528 116.86,73.648 115.716,72.196 L115.716,81.92 L113.252,81.92 L113.252,50.24 L115.716,50.24 L115.716,52.044 C116.86,50.592 118.576,49.712 120.732,49.712 Z M125.616,66.872 L125.616,57.324 C125.616,54.244 123.724,52.176 120.688,52.176 C117.52,52.176 115.716,54.244 115.716,57.324 L115.716,66.916 C115.716,69.996 117.52,72.02 120.688,72.02 C123.724,72.02 125.616,69.952 125.616,66.872 Z M141.632,49.976 L142.644,49.976 L142.644,52.44 L141.324,52.44 C138.42,52.44 136.484,54.508 136.484,57.588 L136.484,74 L134.02,74 L134.02,50.24 L136.484,50.24 L136.484,52.396 C137.672,50.856 139.432,49.976 141.632,49.976 Z M146.208,47.292 L146.208,42.32 L148.672,42.32 L148.672,47.292 L146.208,47.292 Z M146.208,74 L146.208,50.24 L148.672,50.24 L148.672,74 L146.208,74 Z M162.884,49.712 C167.02,49.712 169.792,52.748 169.792,57.324 L169.792,74 L167.284,74 L167.284,57.324 C167.284,54.244 165.392,52.176 162.576,52.176 C159.672,52.176 157.736,54.244 157.736,57.324 L157.736,74 L155.272,74 L155.272,50.24 L157.736,50.24 L157.736,52.132 C158.924,50.592 160.684,49.712 162.884,49.712 Z M185.016,74.264 C180.528,74.264 177.536,71.052 177.536,66.168 L177.536,52.572 L173.136,52.572 L173.136,50.196 L177.536,50.196 L177.536,44.08 L180,44.08 L180,50.196 L186.336,50.196 L186.336,52.572 L180,52.572 L180,66.168 C180,69.556 182.024,71.756 185.016,71.756 L186.336,71.756 L186.336,74.264 L185.016,74.264 Z" id="True-Footprint-Copy" fill="#333333"></path>;
  } else {
    width = 58;
  }

  return (
    <svg width={`${width}px`} height="123px" viewBox={`0 0 ${width} 123`} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(20.000000, 24.000000)">
                <g fill-rule="nonzero">
                    <polygon id="Line" fill="#D6D0C3" points="6.29411765 5.16666667 8.29411765 5.16666667 8.29411765 70.8888889 6.29411765 70.8888889"></polygon>
                    <ellipse id="Oval-Copy-23" fill="#96DBBE" cx="7.76470588" cy="7.53703704" rx="7.76470588" ry="7.53703704"></ellipse>
                    <ellipse id="Oval-Copy-25" fill="#D3BF6E" cx="7.76470588" cy="65.7777778" rx="7.76470588" ry="7.53703704"></ellipse>
                    <ellipse id="Oval-Copy-28" fill="#448AA9" cx="7.76470588" cy="36.3148148" rx="7.76470588" ry="7.53703704"></ellipse>
                </g>
                {text}
            </g>
        </g>
    </svg>
  );
};

export default Logo;
