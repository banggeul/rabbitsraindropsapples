export var instructions = [
  {
    foreground: "big_rabbit_Eyes.png",
    isVideo: "0",
    text: {
      en:"This is Maxi. <br><br> Maxi is very hungry and carrots <br>are Maxi’s favorite food. <br><br>Maxi is looking for carrots to eat.",
      de:"Das ist Maxi. <br><br> Maxi ist sehr hungrig und Karotten <br>sind Maxis Lieblingsessen. <br><br>Maxi sucht nach Karotten zum Essen."
    },
    textDelay: "1",
    x:"45%",
    y:"40%",
    image_x: "5%",
    image_y: "0",
    textAlign: "left",
    imgfadeOut: "1"
  },
  {
    background: "path.png",
    foreground: "politePoseEyes.png",
    isVideo: "0",
    animation: {
      property: "x",
      to: "350",
      duration: "3"
    },
    text: {
      en: "See these spots? <br> Maxi will follow this path looking for carrots in each spot.",
      de:"Siehst du diese Punkte? <br>Maxi folgt diesem Pfad und sucht an jedem Punkt nach Karotten."
    },
    textDelay: "2",
    x:"50%",
    y:"82%",
    image_x: "-200px",
    image_y: "6%",
    image_width: "230px",
    textAlign: "center",
    imgfadeOut: "1"
  },
  {
    background: "flip_bg.png",
    foreground: "carrot_flip.mp4",
    isVideo: "1",
    text: {
      en:"Under some of the spots, Maxi can find <br> a yummy carrot that looks like this…",
      de:"Unter einigen Punkten findet Maxi  <br> eine leckere Karotte, die so aussieht…"
    },
    textDelay: "0",
    x:"50%",
    y:"84.5%",
    textAlign: "center",
    image_x: "0",
    image_y: "0",
    image_width: "1366px",
    imgfadeOut: "0"
  },
  {
    bgColor: "rgba(0,0,0,0)",
    foreground: "dirt_flip.mp4",
    isVideo: "1",
    text: {
      en:"...but under some of the spots, <br>he can’t find anything to eat.",
      de:"...aber unter manchen Punkten <br>kann er nichts zu essen finden."
    },
    textDelay: "0",
    x:"50%",
    y:"84.5%",
    textAlign: "center",
    image_x: "1367px",
    image_y: "0",
    image_width: "1366px",
    imgfadeOut: "0"
  },
  {
    bgColor: "rgba(0,0,0,0)",
    foreground: "big_rabbit_Eyes.png",
    animation: {
      property: "y",
      to: "1350",
      duration: "2"
    },
    isVideo: "0",
    text: {
      en:"Maxi knows that it is as likely to <br> find a carrot under a spot as it is to <br>find nothing under a spot.",
      de:"Maxi weiß, dass es genauso gut möglich ist, <br> eine Karotte unter einem Punkt zu finden,  <br>wie es möglich ist, keine Karotte zu finden."
    },
    textDelay: "0",
    x:"50%",
    y:"82%",
    textAlign: "center",
    image_x: "39%",
    image_y: "-1000px",
    image_width: "600px",
    imgfadeOut: "1"
  },
  {
    background: "path.png",
    foreground: "big_rabbit_Eyes.png",
    animation: {
      property: "y",
      to: "-1317",
      duration: "3"
    },
    isVideo: "0",
    text: {
      en:"Let’s help Maxi guess <br>if there is something to eat <br> or nothing to eat under each spot.",
      de:"Hilf Maxi zu erraten, <br> ob es unter den einzelnen Punkten <br>etwas zu essen oder nichts zu essen gibt."
    },
    textDelay: "1",
    x:"10%",
    y:"82%",
    textAlign: "left",
    image_x: "62%",
    image_y: "1994px",
    image_width: "1000px",
    imgfadeOut: "1"
  }
]
