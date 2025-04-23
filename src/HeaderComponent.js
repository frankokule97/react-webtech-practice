function HeaderComponent() {
    return (
            <div style={{
                backgroundColor: "#a8188c",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "3rem",
                height: "2rem"
            }}>
                <h2 style={{color: "#ffffff"}}>Logo</h2>
                <h3 style={{color: "#ffffff"}}>Logout</h3>
            </div>
    )
}

export default HeaderComponent;