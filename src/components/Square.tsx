import '../css/square.css';

const Square = (props: any) => {

  const { data, cloumnNum } = props;
  console.log(cloumnNum);

  return (
    <div className="squares" style={{ gridTemplateColumns: `repeat(${cloumnNum}, 15px)` }}>
      {
        data.map((n: any, index: number) => {
          return (
            <div className={`child ${index}`} key={index} style={{ opacity: `${n.value * 10}%` }}>
              {/* {n.value} */}
            </div>
          )
        })
      }
    </div>
  )
}

export default Square;