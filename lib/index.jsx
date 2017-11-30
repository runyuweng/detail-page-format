// const data = [
//   {
//     disabled: true,
//     label: 'xxx',
//     id: 'xxx',
//     layout: {
//       labelCol: 10,
//       contentCol: 10
//     },
//     render: (d, t, i) => {<h1>d</h1>}
//   }
// ]

import './index.scss';

export default (dataStrcut, rawData) => {
  if (Object.prototype.toString.call(dataStrcut) !== '[object Array]') {
    console.error('Array is needed');
    return
  }
  return (<div className="detail-page-format">
    {dataStrcut.map((d, i) => {
      if (d.disabled) {
        return
      }

      const {
        labelCol = 6,
        contentCol = 6
      } = (d.layout || {})

      return （<div key={d.id}>
        {
          d.label
          ? <div className={`.col-${labelCol}`}>{d.label}</div>
          : null
        }
        {
          d.render
          ? d.render(rawData[d.id], rawData, i)
          : <div className={`.col-${contentCol}`}>{rawData[d.id]}</div>
        }
      </div>）
    })}
  </div>)
}