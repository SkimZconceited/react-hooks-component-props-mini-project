
function About({image, about}) {
    // console.log(logo)
    // console.log(Boolean(logo) === true ? logo : 'https://via.placeholder.com/215')
    return (
    <aside>
        <img src={Boolean(image) === true ? image : 'https://via.placeholder.com/215'} alt='blog logo'></img>
        <p>{about}</p>
    </aside>
    )
}

export default About;