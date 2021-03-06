import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'materialize-react';

export default function Logo({
  circleColor,
  pickupColor,
  tf2Color,
  ...props
}) {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 1335.51 815.643"
      {...props}
    >
      <g>
        <g>
          <path
            fill={circleColor}
            d={[
              'M247.648,478.136H0c26.302,173.838,163.695,311.204,337.532,337.513V568.044C296.713,',
              '551.558,264.129,518.965,247.648,478.136z',
            ].join('')}
          />
          <path
            fill={circleColor}
            d={[
              'M212.391,152.237h-5.611l-3.964-3.964L152.64,98.104C72.234,160.051,15.879,251.672,0,',
              '356.597h247.648c16.48-40.824,49.064-73.428,89.884-89.909V152.237H212.391z',
            ].join('')}
          />
        </g>

        <g>
          <path
            fill={pickupColor}
            d={[
              'M501.696,589.488c-15.155-14.121-34.154-21.183-56.996-21.183h-93.619v247.338h47.149',
              'v-93.098h46.47c22.842,0,41.841-7.069,56.996-21.196c15.146-14.121,22.727-32.768,22.',
              '727-55.924C524.423,622.275,516.842,603.626,501.696,589.488z M467.6,670.397c-6.443',
              '6.052-14.874,9.067-25.266,9.067H398.23v-68.078h44.104c10.392,0,18.822,3.08,25.266,',
              '9.247c6.443,6.168,9.669,14.484,9.669,24.967C477.269,656.078,474.043,664.345,467.6,',
              '670.397z',
            ].join('')}
          />
          <rect
            x="531.913"
            y="568.305"
            fill={pickupColor}
            width="47.148"
            height="247.338"
          />
          <path
            fill={pickupColor}
            d={[
              'M644.442,626.722c7.681-10.7,18.654-16.057,32.898-16.057c21.713,0,35.282,11.506,40.',
              '711,34.511h47.829c-4.073-24.143-13.857-42.991-29.345-56.542c-15.491-13.551-35.334',
              '-20.33-59.532-20.33c-25.559,0-47.269,8.884-65.13,26.648c-10.857,10.707-17.866,24.',
              '712-21.032,42.022c-1.813,9.792-2.714,28.125-2.714,54.997c0,27.327,0.901,45.666,2.',
              '714,55.005c3.393,17.31,10.401,31.315,21.032,42.022c17.643,17.758,39.347,26.643,',
              '65.13,26.643c23.972,0,43.814-6.833,59.532-20.499c15.715-13.661,25.492-32.454,29.',
              '345-56.373h-47.829c-5.659,23.011-19.229,34.505-40.711,34.505c-24.646,0-38.448-15.',
              '246-41.384-45.774c-0.454-4.774-0.679-9.333-0.679-13.66v-21.868C635.278,657.13,638.',
              '336,635.383,644.442,626.722z',
            ].join('')}
          />
          <polygon
            fill={pickupColor}
            points={[
              '965.385,568.305 908.203,568.305 823.062,675.99 823.062,568.305 775.907,568.305 775.',
              '907,815.643 823.062,815.643 823.062,741.143 854.068,703.02 916.159,815.643 971.297,',
              '815.643 885.475,666.62',
            ].join('')}
          />
          <path
            fill={pickupColor}
            d={[
              'M1105.334,727.804c0,13.552-3.68,24.457-11.021,32.725c-7.354,8.262-17.696,12.396-31.',
              '039,12.396c-13.119,0-23.354-4.135-30.701-12.396c-7.354-8.268-11.025-19.173-11.025-',
              '32.725V568.305h-47.15v161.224c0,25.723,8.595,46.616,25.779,62.691c16.51,15.614,37.',
              '537,23.416,63.098,23.416c25.547,0,46.752-7.923,63.604-23.767c16.843-15.846,25.271-',
              '36.618,25.271-62.341V568.305h-46.815V727.804z',
            ].join('')}
          />
          <path
            fill={pickupColor}
            d={[
              'M1312.787,589.488c-15.152-14.121-34.154-21.183-56.992-21.183h-93.623v247.338h47.',
              '152v-93.098h46.471c22.838,0,41.84-7.069,56.992-21.196c15.149-14.121,22.723-32.768,',
              '22.723-55.924C1335.51,622.275,1327.937,603.626,1312.787,589.488z M1278.694,670.',
              '397c-6.44,6.052-14.874,9.067-25.27,9.067h-44.101v-68.078h44.101c10.396,0,18.829,3.',
              '08,25.27,9.247c6.444,6.168,9.668,14.484,9.668,24.967C1288.362,656.078,1285.139,664.',
              '345,1278.694,670.397z',
            ].join('')}
          />
        </g>

        <g>
          <polygon
            fill={tf2Color}
            points={[
              '73.705,0 212.391,138.692 351.081,138.692 351.081,554.753 489.767,554.753 489.767,',
              '138.692 609.296,138.692 470.607,0',
            ].join('')}
          />
          <polygon
            fill={tf2Color}
            points={[
              '969.233,277.377 767.143,277.377 767.143,138.692 969.337,138.692 830.65,0 489.767',
              ',0 628.452,138.692 628.452,554.753 767.143,554.753 767.143,416.068 868.363,416.068',
            ].join('')}
          />
          <path
            fill={tf2Color}
            d={[
              'M1058.138,413.968l112.714-154.984c0,0,24.852-36.019,42.827-63.018c0.721-1.132,1.',
              '513-2.331,2.384-3.595c1.333-2.01,2.615-3.953,3.829-5.816c49.688-78.046,33.915-180.',
              '574-128.06-186.36C1080.063,0.188,849.813,0,849.813,0l138.686,138.692h2.555c73.484,',
              '0,91.468,5.943,27.946,93.298L784.248,554.753h412.577h138.685l-138.685-140.785H1058.',
              '138z',
            ].join('')}
          />
        </g>
      </g>
    </svg>
  );
}

Logo.propTypes = {
  circleColor: PropTypes.string,
  pickupColor: PropTypes.string,
  tf2Color: PropTypes.string,
};

Logo.defaultProps = {
  circleColor: colors.grey500,
  pickupColor: colors.grey700,
  tf2Color: colors.blue500,
};
