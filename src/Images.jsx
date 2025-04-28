import React from "react";
import "./App.css";
import Potter from "./images/Potter.jpg"
import Ron from "./images/Ron.jpg"
import Hermione from "./images/Hermione.jpg"
import Hagrid from "./images/Hagrid.jpg"
import Snape from "./images/Snape.webp"
import Dumbledore from "./images/Dumbledore.webp"

const Images = () => {
    return (
        <div className="potter-container">
            <div>
                <h1>
                    Main characters of Harry Potter and the Philosopher's Stone
                </h1>
            </div>
            <div className="images-container">
                <div className="character-container">
                    <div className="image">
                        <img src={Potter} alt="" width={200} height={300}/>
                    </div>
                    <div>
                        <h2>Harry Potter</h2>
                        <h3 style={{
                            color: "#999999"
                        }}>Daniel Radcliffe</h3>
                        <p>Harry James Potter is the titular character of the Harry Potter series of novels by J. K.
                            Rowling. The plot of the seven-book series chronicles seven years in the life of the orphan
                            Harry, who, on his eleventh birthday, learns he is a wizard. He attends Hogwarts, a school
                            of magic, where he receives guidance from the headmaster Albus Dumbledore and becomes
                            friends with Ron Weasley and Hermione Granger. Harry learns that during his infancy, the
                            Dark wizard Lord Voldemort murdered his parents but was unable to kill him as well. The plot
                            of the series revolves around Harry's struggle to adapt to the wizarding world and defeat
                            Voldemort.</p>
                    </div>
                </div>

                <div className="character-container">
                    <div className="image">
                        <img src={Ron} alt="" width={200} height={300}/>
                    </div>
                    <div>
                        <h2>Ron Weasley</h2>
                        <h3 style={{
                            color: "#999999"
                        }}>Rupert Grint</h3>
                        <p>Ronald Bilius Weasley is a fictional character in the Harry Potter series of novels by J. K.
                            Rowling. He is introduced in Harry Potter and the Philosopher's Stone as a first-year
                            student on his way to the wizarding school Hogwarts. During the school year, Ron befriends
                            Harry Potter and Hermione Granger. Being the only member of the trio who was raised in
                            wizarding society, he provides insight into wizarding customs and traditions. Along with
                            Harry and Hermione, he is a member of Gryffindor House at Hogwarts and is present for most
                            of the action throughout the series. Ron is portrayed by Rupert Grint in all eight Harry
                            Potter films.</p>
                    </div>
                </div>

                <div className="character-container">
                    <div className="image">
                        <img src={Hermione} alt="" width={200} height={300}/>
                    </div>
                    <div>
                        <h2>Emma Watson</h2>
                        <h3 style={{
                            color: "#999999"
                        }}>Hermione Granger</h3>
                        <p>Hermione Jean Granger (/hɜːrˈmaɪəni ˈɡreɪndʒər/ hur-MY-ə-nee GRAYN-jər) is a fictional
                            character in the Harry Potter series of novels by J. K. Rowling. She first appeared in Harry
                            Potter and the Philosopher's Stone (1997), as a first-year student on her way to Hogwarts.
                            She becomes friends with Harry Potter and Ron Weasley after they save her from a troll in
                            the girls' bathroom. Hermione often uses her quick wit, deft recall, and encyclopaedic
                            knowledge to help her friends in perilous situations. Rowling has stated that Hermione
                            resembles herself as a young girl, with her insecurity and fear of failure.</p>
                    </div>
                </div>

                <div className="character-container">
                    <div className="image">
                        <img src={Hagrid} alt="" width={200} height={300}/>
                    </div>
                    <div>
                        <h2>Rubeus Hagrid</h2>
                        <h3 style={{
                            color: "#999999"
                        }}>Robbie Coltrane</h3>
                        <p>Rubeus Hagrid (/ˈhæɡrɪd/) is a fictional character in the Harry Potter series of novels by J.
                            K. Rowling. He was introduced in Harry Potter and the Philosopher's Stone (2001) as a
                            half-giant who is the gamekeeper and groundskeeper at the wizarding school Hogwarts. He is a
                            member of the Order of the Phoenix and eventually becomes the Care of Magical Creatures
                            professor. Hagrid is portrayed by Robbie Coltrane in all eight Harry Potter films.</p>
                    </div>
                </div>

                <div className="character-container">
                    <div className="image">
                        <img src={Snape} alt="" width={200} height={300}/>
                    </div>
                    <div>
                        <h2>Severus Snape</h2>
                        <h3 style={{
                            color: "#999999"
                        }}>Alan Rickman</h3>
                        <p>Severus Snape is a fictional character in the Harry Potter series of novels by J. K. Rowling.
                            In the first five novels, he is the professor of Potions at Hogwarts School of Witchcraft
                            and Wizardry. In the sixth book, he teaches Defence Against the Dark Arts, and in the
                            seventh book he ascends to the position of headmaster before his death. Snape is hostile,
                            yet heroic towards Harry Potter throughout the series; Harry eventually learns that Snape
                            was bullied by Harry's father, James Potter, and was in love with Harry's mother, Lily
                            Evans. This causes Snape to have mixed feelings towards Harry, who resembles his father
                            greatly, but has his mother's eyes.</p>
                    </div>
                </div>

                <div className="character-container">
                    <div className="image">
                        <img src={Dumbledore} alt="" width={200} height={300}/>
                    </div>
                    <div>
                        <h2>Albus Dumbledore</h2>
                        <h3 style={{
                            color: "#999999"
                        }}>Michael Gambon </h3>
                        <p>Professor Albus Percival Wulfric Brian Dumbledore is a fictional character in the Harry
                            Potter series of novels by J. K. Rowling. For most of the series, he is the headmaster of
                            the wizarding school Hogwarts. He is also the founder and leader of the Order of the
                            Phoenix, an organisation dedicated to fighting the Dark wizard Lord Voldemort.
                            Dumbledore is widely regarded as one of the most powerful and influential wizards of his
                            time. Renowned for his wisdom, kindness, and formidable magical abilities, he plays a
                            crucial role in shaping the events of the wizarding world. As a mentor to Harry Potter, he
                            provides guidance and crucial knowledge in the fight against Voldemort.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Images;