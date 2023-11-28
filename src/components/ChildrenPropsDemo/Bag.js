function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag

{/* <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />

      <Bag>
        <Apples color="yellow" number="5" />
      </Bag>
      <Bag>
        <Pears friend="Peter" />
      </Bag>

      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} /> */}