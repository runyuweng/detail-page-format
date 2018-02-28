
import React from 'react'
import '../assets/index.css';

/**
 * Return react elements.
 *
 * @param {Array} dataStrcut You can format the data by dataStrcut.
 * @param {Object} data The original data.
 */

export default (props) => {
  const {dataStrcut, data, rowStyle={}} = props;
  if (Object.prototype.toString.call(dataStrcut) !== '[object Array]') {
    console.error('Array is needed');
    return
  }
  return (<div className="detail-page-format" style={props.style}>
    {dataStrcut.map((d, i) => {
      if (d.disabled) {
        return
      }

      const {
        labelCol = 6,
        contentCol = 6
      } = (d.layout || {})

      return (<div key={d.name + i} className="row" style={rowStyle}>
        {
          d.label
          ? <div className={`col col-${labelCol}`} style={{textAlign: 'right'}}>{d.label}</div>
          : null
        }
        {
          d.render
          ? <div className={`col col-${contentCol}`}>{d.render(data[d.id], data, i)}</div>
          : <div className={`col col-${contentCol}`}>{data[d.name]}</div>
        }
      </div>)
    })}
  </div>)
}