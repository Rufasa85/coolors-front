import React from "react";
import "./style.css";

export default function Preview(props) {
    const styles = {
        previewStyles:{
            backgroundColor:props.colors[0].color,
            color:props.colors[0].isDark? "white":"black",
            textAlign:"center",
        },
        headFootStyles:{
            backgroundColor:props.colors[1].color,
            color:props.colors[1].isDark? "white":"black",
            height:"10vh"
        },
        headingsStyles:{
            backgroundColor:props.colors[2].color,
            color:props.colors[2].isDark? "white":"black",
        },
        mainStyles:{
            flexGrow:1,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around"
        },
        linkStyles:{
            backgroundColor:props.colors[3].color,
            color:props.colors[3].isDark? "white":"black",
            border:`3px solid ${props.colors[1].color}`
        }
    }
  return (
    <div className="Preview" style={styles.previewStyles}>
      <nav style={styles.headFootStyles}>
        <h3>Header</h3>
      </nav>
      <main style={styles.mainStyles}>
        <h1 style={styles.headingsStyles}>Heading!</h1>
        <h2 style={styles.headingsStyles}>Subhead!</h2>
        <p>
          I'm baby salvia small batch man bun artisan ennui mumblecore
          gluten-free gentrify. +1 meh pop-up kickstarter post-ironic hexagon
          wayfarers distillery fixie unicorn lumbersexual kogi JOMO cliche.
          Sustainable edison bulb neutral milk hotel, lyft JOMO shabby chic echo
          park banjo cray glossier waistcoat four dollar toast bitters. Fashion
          axe air plant glossier kombucha, everyday carry irony artisan organic
          lomo mustache hammock portland fit iPhone. Pickled paleo +1 mixtape,
          gorpcore gastropub forage fashion axe sustainable cray. Skateboard
          biodiesel etsy farm-to-table, put a bird on it edison bulb paleo 3
          wolf moon keytar tonx four dollar toast. Squid celiac cardigan
          readymade single-origin coffee cloud bread. Meggings butcher messenger
          bag letterpress woke migas freegan lo-fi bitters. Freegan lumbersexual
          letterpress yr ugh tumblr banh mi 8-bit helvetica. Pour-over
          humblebrag cronut locavore single-origin coffee hoodie raw denim
          intelligentsia typewriter. Unicorn bitters selfies pabst. Ascot
          succulents praxis, hot chicken blog PBR&B biodiesel tumeric 8-bit
          letterpress single-origin coffee chambray hammock fit. Bespoke ascot
          letterpress craft beer asymmetrical ethical man braid direct trade
          90's. Jawn schlitz tofu, fashion axe DIY cardigan bruh Brooklyn copper
          mug typewriter. Cardigan wolf pinterest prism, Brooklyn direct trade
          green juice pour-over messenger bag af etsy lomo fashion axe ugh.
          I'm baby salvia small batch man bun artisan ennui mumblecore
          gluten-free gentrify. +1 meh pop-up kickstarter post-ironic hexagon
          wayfarers distillery fixie unicorn lumbersexual kogi JOMO cliche.
          Sustainable edison bulb neutral milk hotel, lyft JOMO shabby chic echo
          park banjo cray glossier waistcoat four dollar toast bitters. Fashion
          axe air plant glossier kombucha, everyday carry irony artisan organic
          lomo mustache hammock portland fit iPhone. Pickled paleo +1 mixtape,
          gorpcore gastropub forage fashion axe sustainable cray. Skateboard
          biodiesel etsy farm-to-table, put a bird on it edison bulb paleo 3
          wolf moon keytar tonx four dollar toast. Squid celiac cardigan
          readymade single-origin coffee cloud bread. Meggings butcher messenger
          bag letterpress woke migas freegan lo-fi bitters. Freegan lumbersexual
          letterpress yr ugh tumblr banh mi 8-bit helvetica. Pour-over
          humblebrag cronut locavore single-origin coffee hoodie raw denim
          intelligentsia typewriter. Unicorn bitters selfies pabst. Ascot
          succulents praxis, hot chicken blog PBR&B biodiesel tumeric 8-bit
          letterpress single-origin coffee chambray hammock fit. Bespoke ascot
          letterpress craft beer asymmetrical ethical man braid direct trade
          90's. Jawn schlitz tofu, fashion axe DIY cardigan bruh Brooklyn copper
          mug typewriter. Cardigan wolf pinterest prism, Brooklyn direct trade
          green juice pour-over messenger bag af etsy lomo fashion axe ugh.
        </p>
        <section className="links" style={{
            display:"flex",
            justifyContent:"space-around"
        }}>
        <a href="#" style={styles.linkStyles}>Link 1</a>
        <a href="#" style={styles.linkStyles}>Link 2</a>
        <a href="#" style={styles.linkStyles}>Link 3</a>
        </section>
      </main>
      <footer style={styles.headFootStyles}><h3>footer!</h3></footer>
    </div>
  );
}
