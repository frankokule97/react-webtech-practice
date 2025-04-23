function NavComponent() {
    return (
        <div style={{
            color: "#a8188c",
            height: "3.5rem",
            display: "flex",
            flexDirection: "row-reverse",
            paddingRight: "3rem",
            gap: "2rem"
        }}>
            <h3>About</h3>
            <h3>Products</h3>
            <h3>Services</h3>
            <h3>Contact Us</h3>
        </div>
    )
}

export default NavComponent;