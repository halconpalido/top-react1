export function FriedChicken(){
    return (
        <>
        <div>
        <h2>This is fried chicken.</h2>
        <img src="../public/fried.jpg" alt="" className="chicken" />
        </div>
        </>
      )
}

export function UnfriedChicken(){
    return (
        <>
        <div>
        <h2>This is <i>not</i> fried chicken.</h2>
        <img src="../public/unfried.jpg" alt="" className="chicken"/>
        </div>
        </>
      )
}