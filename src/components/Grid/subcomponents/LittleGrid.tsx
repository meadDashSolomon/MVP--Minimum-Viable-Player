import { useState } from "react";
import Search from "./Search";

const LittleGrid = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState({
    1: [
      "Jeremy Accardo",
      "Roberto Alomar",
      "Alan Ashby",
      "John Axford",
      "Gerónimo Berroa",
      "Casey Blake",
      "Pat Borders",
      "Melky Cabrera",
      "Tom Candiotti",
      "Ezequiel Carrera",
      "Joe Carter",
      "Rico Carty",
      "Rick Cerone",
      "Adam Cimber",
      "Ernie Clement",
      "Tyler Clippard",
      "Marty Cordova",
      "Ted Cox",
      "Rajai Davis",
      "David Dellucci",
      "Mark DeRosa",
      "Josh Donaldson",
      "Edwin Encarnación",
      "Sal Fasano",
      "Tony Fernández",
      "Cecil Fielder",
      "Ben Francisco",
      "Yan Gomes",
      "Chris Gomez",
      "Rene Gonzales",
      "Anthony Gose",
      "Alfredo Griffin",
      "Brad Hand",
      "Glenallen Hill",
      "Dave Hollins",
      "Willie Horton",
      "Mike Huff",
      "Joe Inglett",
      "Cliff Johnson",
      "Jeff Kent",
      "George Kottaras",
      "Aaron Laffey",
      "Mark Lowe",
      "Héctor Luna",
      "Jordan Luplow",
      "Luke Maile",
      "Candy Maldonado",
      "Sandy Martínez",
      "John McDonald",
      "Jayson Nix",
      "Otis Nixon",
      "Jorge Orta",
      "Lance Parrish",
      "Josh Phelps",
      "Neil Ramírez",
      "Domingo Ramos",
      "Esmil Rogers",
      "Phil Roof",
      "Marc Rzepczynski",
      "David Segui",
      "Joe Smith",
      "Cory Snyder",
      "Justin Speier",
      "Pat Tabler",
      "Brian Tallet",
      "Beau Taylor",
      "Willie Upshaw",
      "Gio Urshela",
      "Jorge Velandia",
      "Otto Vélez",
      "Omar Vizquel",
      "Turner Ward",
      "Mitch Webster",
      "Mark Whiten",
      "Dave Winfield",
      "Bradley Zimmer",
      "Jeremy Accardo",
      "John Axford",
      "Jeff Beliveau",
      "Bud Black",
      "Willie Blair",
      "Denis Boucher",
      "Bryan Bullington",
      "Tom Buskey",
      "Tom Candiotti",
      "Anthony Castro",
      "Vinnie Chulk",
      "Adam Cimber",
      "Bryan Clark",
      "Ernie Clement",
      "Tyler Clippard",
      "A.J. Cole",
      "Víctor Cruz",
      "Steve Davis",
      "Oliver Drake",
      "Gavin Floyd",
      "Dave Freisleben",
      "Justin Germano",
      "Don Gordon",
      "Mauro Gozzo",
      "Preston Guilmet",
      "Brad Hand",
      "Steve Hargan",
      "T.J. House",
      "Jerry Johnson",
      "Aaron Laffey",
      "Dominic Leone",
      "Mark Lowe",
      "Shaun Marcum",
      "Dave Maurer",
      "Jack Morris",
      "Phil Niekro",
      "Daniel Norris",
      "Tomo Ohka",
      "Neil Ramírez",
      "Nerio Rodríguez",
      "Esmil Rogers",
      "Marc Rzepczynski",
      "Ken Schrom",
      "Joe Smith",
      "Justin Speier",
      "Brian Tallet",
      "Jeff Tam",
      "David Weathers",
      "Frank Wills",
    ],
    2: [
      "Terry Adams",
      "Henderson Alvarez III",
      "Rod Barajas",
      "Howard Battle",
      "José Bautista",
      "Joaquin Benoit",
      "Rick Bosetti",
      "A.J. Burnett",
      "Rob Butler",
      "Miguel Cairo",
      "Shawn Camp",
      "Sil Campusano",
      "Ezequiel Carrera",
      "Domingo Cedeño",
      "Danny Cox",
      "Felipe Crespo",
      "Dick Davis",
      "David Dellucci",
      "Corey Dickerson",
      "Rob Ducey",
      "Mariano Duncan",
      "Bobby Estalella",
      "Scott Eyre",
      "Sal Fasano",
      "Darrin Fletcher",
      "Gavin Floyd",
      "Ben Francisco",
      "Freddy Galvis",
      "Ken Giles",
      "Alex Gonzalez",
      "Roy Halladay",
      "Brad Hand",
      "J.A. Happ",
      "Dave Hollins",
      "Drew Hutchison",
      "Tom Hutton",
      "Erik Kratz",
      "Cory Lidle",
      "Brad Lincoln",
      "Adam Loewen",
      "Aquilino López",
      "Aaron Loup",
      "Héctor Luna",
      "Len Matuszek",
      "John Mayberry",
      "John McDonald",
      "Dustin McGowan",
      "Trever Miller",
      "Mickey Morandini",
      "Jayson Nix",
      "Al Oliver",
      "Jimmy Paredes",
      "Lance Parrish",
      "Tomás Pérez",
      "Juan Pérez",
      "Robert Person",
      "Dan Plesac",
      "Cliff Politte",
      "Paul Quantrill",
      "Tom Quinlan",
      "Ben Revere",
      "Scott Rolen",
      "Francisco Rosario",
      "Juan Samuel",
      "Benito Santiago",
      "Michael Saunders",
      "Scott Service",
      "Paul Spoljaric",
      "Matt Stairs",
      "Dave Stewart",
      "Darnell Sweeney",
      "Mike Timlin",
      "Ozzie Virgil",
      "Turner Ward",
      "Jayson Werth",
      "Mark Whiten",
      "Bradley Zimmer",
      "Terry Adams",
      "Henderson Alvarez III",
      "Chase Anderson",
      "Doug Bair",
      "Joaquin Benoit",
      "Clay Buchholz",
      "A.J. Burnett",
      "Shawn Camp",
      "Drew Carpenter",
      "Danny Cox",
      "Omar Daal",
      "Valerio De Los Santos",
      "Nino Espinosa",
      "Scott Eyre",
      "Gavin Floyd",
      "Ken Giles",
      "Roy Halladay",
      "Brad Hand",
      "J.A. Happ",
      "Drew Hutchison",
      "Jerry Johnson",
      "Ricardo Jordan",
      "Jack Kucek",
      "Mark Leiter Jr.",
      "Cory Lidle",
      "Brad Lincoln",
      "Aquilino López",
      "Aaron Loup",
      "Dustin McGowan",
      "Trever Miller",
      "David Paulino",
      "Juan Pérez",
      "Robert Person",
      "David Phelps",
      "Dan Plesac",
      "Cliff Politte",
      "Paul Quantrill",
      "Francisco Rosario",
      "Scott Service",
      "Paul Spoljaric",
      "Dave Stewart",
      "Mike Timlin",
      "Tom Underwood",
      "Andrew Vasquez",
      "Taijuan Walker",
      "Dave Wallace",
      "Mickey Weston",
      "Matt Whiteside",
    ],
    3: [
      "Vernon Wells",
      "Shannon Stewart",
      "John Olerud",
      "Paul Molitor",
      "Tony Fernández",
    ],
    4: [
      "Jesús Aguilar",
      "Matt Albers",
      "Andy Allanson",
      "Max Alvis",
      "Greg Aquino",
      "Rick Austin",
      "John Axford",
      "Joe Azcue",
      "Gary Bell",
      "David Bell",
      "Ronnie Belliard",
      "Ken Berry",
      "Kurt Bevacqua",
      "Russell Branyan",
      "Dave Burba",
      "Jeromy Burnitz",
      "Bernie Carbo",
      "José Cardenal",
      "Rick Cerone",
      "Kane Davis",
      "Rick Dempsey",
      "Chris Dickerson",
      "Oliver Drake",
      "Jamie Easterly",
      "Dick Ellsworth",
      "Tony Fernández",
      "Ray Fosse",
      "Julio Franco",
      "Terry Francona",
      "Tito Francona",
      "Ben Gamel",
      "Jody Gerut",
      "Gus Gil",
      "Tom Gorzelanny",
      "Tony Graffanino",
      "Marquis Grissom",
      "Tommy Harper",
      "Jack Heidemann",
      "José Hernández",
      "Tyler Houston",
      "Joe Inglett",
      "Dion James",
      "Doug Jones",
      "Jeff Juden",
      "Jorge Julio",
      "Brad Komminsk",
      "George Kottaras",
      "Tom Lampkin",
      "Jesse Levis",
      "Jeff Liefer",
      "Boone Logan",
      "Marcelino López",
      "Andrew Lorraine",
      "Gordy Lund",
      "Chris Magruder",
      "Luke Maile",
      "Candy Maldonado",
      "Rick Manning",
      "Owen Miller",
      "Brad Miller",
      "Nyjer Morgan",
      "Guillermo Mota",
      "John O'Donoghue",
      "Tomo Ohka",
      "Eddie Pérez",
      "Eric Plunk",
      "Jamie Quirk",
      "Neil Ramírez",
      "Mark Reynolds",
      "Paul Rigdon",
      "David Riske",
      "Rich Rollins",
      "Phil Roof",
      "Vinny Rottino",
      "CC Sabathia",
      "Domingo Santana",
      "Kevin Seitzer",
      "Richie Sexson",
      "Russ Snyder",
      "Fred Stanley",
      "Julián Tavárez",
      "Gorman Thomas",
      "Ryan Thompson",
      "José Vidal",
      "Luis Vizcaíno",
      "Rick Waits",
      "Turner Ward",
      "Floyd Weaver",
      "Bob Wickman",
      "Steve Woodard",
      "Mike Young",
      "Matt Albers",
      "Greg Aquino",
      "Rick Austin",
      "John Axford",
      "Len Barker",
      "Gary Bell",
      "Jason Bere",
      "Dave Burba",
      "Tom Candiotti",
      "Vinnie Chulk",
      "Jeff D'Amico",
      "Kane Davis",
      "Oliver Drake",
      "Jamie Easterly",
      "Dick Ellsworth",
      "Ed Farmer",
      "Rob Gardner",
      "Tom Gorzelanny",
      "Preston Guilmet",
      "Neal Heaton",
      "Zach Jackson",
      "Doug Jones",
      "Jeff Juden",
      "Jorge Julio",
      "Jim Kern",
      "Boone Logan",
      "Marcelino López",
      "Andrew Lorraine",
      "Shaun Marcum",
      "J.C. Mejía",
      "Guillermo Mota",
      "Jaime Navarro",
      "Daniel Norris",
      "John O'Donoghue",
      "Tomo Ohka",
      "Jesse Orosco",
      "Eric Plunk",
      "Neil Ramírez",
      "Bob Reynolds",
      "Paul Rigdon",
      "David Riske",
      "CC Sabathia",
      "Ken Sanders",
      "Lary Sorensen",
      "Anthony Swarzak",
      "Julián Tavárez",
      "José Veras",
      "Ron Villone",
      "Luis Vizcaíno",
      "Paul Wagner",
      "Rick Waits",
      "David Weathers",
      "Floyd Weaver",
      "Kevin Wickander",
      "Bob Wickman",
      "Steve Woodard",
      "Jamey Wright",
    ],
    5: [
      "Mike Adams",
      "Chase Anderson",
      "Alec Asher",
      "Dan Boitano",
      "Ricky Bottalico",
      "Darrell Brandon",
      "Ken Brett",
      "Bill Champion",
      "Kane Davis",
      "Mark Davis",
      "Valerio De Los Santos",
      "Tom Edens",
      "Dick Ellsworth",
      "Ed Farmer",
      "Neftalí Feliz",
      "Nelson Figueroa",
      "Deolis Guerra",
      "Reggie Harris",
      "Jared Hughes",
      "César Jiménez",
      "Doug Jones",
      "Jeff Juden",
      "Trevor Kelley",
      "Jim Kern",
      "Brandon Kintzler",
      "Corey Knebel",
      "Dave LaPoint",
      "Mark Leiter",
      "Randy Lerch",
      "Josh Lindblom",
      "Frank Linzy",
      "Pedro Liriano",
      "Kyle Lohse",
      "Jim Lonborg",
      "Marcelino López",
      "Alex Madrid",
      "Hoby Milner",
      "John Morris",
      "Juan Pérez",
      "David Phelps",
      "Dan Plesac",
      "Ken Reynolds",
      "Bruce Ruffin",
      "Julio Santana",
      "Bob Sebra",
      "Dick Selma",
      "Chris Short",
      "R.J. Swindle",
      "Wayne Twitchell",
      "Randy Wolf",
      "Mike Zagurski",
    ],
    6: ["Robin Yount", "Cecil Cooper", "Paul Molitor", "Ryan Braun"],
    7: [
      "Jim Thome",
      "Albert Belle",
      "Jim Thome",
      "Albert Belle",
      "Manny Ramírez",
      "Manny Ramírez",
      "Al Rosen",
      "Rocky Colavito",
      "Travis Hafner",
      "Hal Trosky",
      "Rocky Colavito",
      "Jim Thome",
      "José Ramírez",
      "Albert Belle",
      "Edwin Encarnación",
      "Manny Ramírez",
      "Jim Thome",
      "Al Rosen",
      "Jim Thome",
      "Albert Belle",
      "José Ramírez",
      "Joe Carter",
      "Juan González",
      "Hal Trosky",
      "Albert Belle",
      "Mike Napoli",
      "Travis Hafner",
      "David Justice",
      "Manny Ramírez",
      "Jim Thome",
      "Andre Thornton",
      "Earl Averill",
      "Earl Averill",
      "Joe Carter",
      "Larry Doby",
      "Larry Doby",
      "Edwin Encarnación",
      "Joe Gordon",
      "Andre Thornton",
      "Hal Trosky",
      "Vic Wertz",
      "Matt Williams",
      "Earl Averill",
      "Ken Keltner",
      "Manny Ramírez",
      "Richie Sexson",
      "Leon Wagner",
      "Joe Carter",
      "Larry Doby",
      "José Ramírez",
      "Earl Averill",
      "Luke Easter",
      "Travis Hafner",
      "Al Rosen",
      "Vic Wertz",
      "Luke Easter",
      "Rocky Colavito",
      "Ken Keltner",
      "Ed Morgan",
      "Hal Trosky",
      "Larry Doby",
      "Victor Martinez",
      "Hal Trosky",
      "Roberto Alomar",
      "Carlos Baerga",
      "Jeff Heath",
      "Roberto Alomar",
      "Carlos Baerga",
      "Moose Solters",
      "Earl Averill",
      "Hal Trosky",
      "Lou Boudreau",
      "Tris Speaker",
      "Odell Hale",
      "Odell Hale",
      "Elmer Smith",
      "Joe Vosmik",
      "Lou Boudreau",
      "Johnny Hodapp",
      "Tris Speaker",
      "Joe Vosmik",
      "Lew Fonseca",
      "Nap Lajoie",
      "George Burns",
    ],
    8: [
      "Ryan Howard",
      "Mike Schmidt",
      "Jim Thome",
      "Chuck Klein",
      "Cy Williams",
      "Dick Allen",
      "Greg Luzinski",
      "Pat Burrell",
      "Johnny Callison",
      "Lefty O'Doul",
      "Bryce Harper",
      "Chase Utley",
      "Bobby Abreu",
      "Don Hurst",
      "Scott Rolen",
      "Darren Daulton",
      "Del Ennis",
      "Ron Northey",
      "Juan Samuel",
      "Sherry Magee",
      "Glenn Wilson",
      "Elmer Flick",
      "Rico Brogna",
      "Don Demeter",
      "Dolph Camilli",
      "Sam Thompson",
      "Gavvy Cravath",
      "Pinky Whitney",
      "Ed Delahanty",
      "Nap Lajoie",
      "Lave Cross",
    ],
    9: [
      "Rafael Devers",
      "Charlie Blackmon",
      "Mookie Betts",
      "Miguel Cabrera",
      "Jacoby Ellsbury",
      "Adrián González",
      "Michael Young",
      "Robinson Canó",
      "Ryan Braun",
      "Matt Holliday",
      "Magglio Ordóñez",
      "Vladimir Guerrero",
      "Miguel Tejada",
      "Chase Utley",
      "Adrián Beltré",
      "Garret Anderson",
      "Todd Helton",
      "Albert Pujols",
      "Vernon Wells",
      "Alfonso Soriano",
      "Bernie Williams",
      "Bret Boone",
      "Álex Rodríguez",
      "Darin Erstad",
      "Mike Sweeney",
      "Luis Gonzalez",
      "Mike Piazza",
      "Larry Walker",
      "Ellis Burks",
      "Paul Molitor",
      "Mo Vaughn",
      "Tony Gwynn",
      "Robin Yount",
      "Cecil Cooper",
      "Cal Ripken Jr.",
      "Bill Buckner",
      "Al Oliver",
      "Steve Garvey",
      "Jim Rice",
      "Rod Carew",
      "Joe Torre",
      "Tony Oliva",
      "Billy Williams",
      "Roberto Clemente",
      "George Kell",
      "Stan Musial",
      "Jackie Robinson",
      "Tommy Holmes",
      "Cecil Travis",
      "Frank McCormick",
      "Beau Bell",
      "Joe DiMaggio",
      "Lou Gehrig",
      "Hank Greenberg",
      "Johnny Mize",
      "Gee Walker",
      "Luke Appling",
      "Earl Averill",
      "Charlie Gehringer",
      "Hank Leiber",
      "Buddy Myer",
      "Moose Solters",
      "Joe Vosmik",
      "Ripper Collins",
      "Jimmie Foxx",
      "Hal Trosky",
      "Chuck Klein",
      "Al Simmons",
      "Bill Terry",
      "Johnny Hodapp",
      "Freddie Lindstrom",
      "Ed Morgan",
      "Carl Reynolds",
      "Paul Waner",
      "Pinky Whitney",
      "Hack Wilson",
      "Dale Alexander",
      "Lew Fonseca",
      "Babe Herman",
      "Rogers Hornsby",
      "Lefty O'Doul",
      "George Burns",
      "Goose Goslin",
      "Jim Bottomley",
      "Kiki Cuyler",
      "Harry Heilmann",
      "Austin McHenry",
      "Babe Ruth",
      "Joe Jackson",
      "Baby Doll Jacobson",
      "Tris Speaker",
      "Ty Cobb",
      "Home Run Baker",
      "Heinie Zimmerman",
      "Sam Crawford",
    ],
  });
  const [currentGuess, setCurrentGuess] = useState("");
  const [selectedCell, setSelectedCell] = useState(null);

  return (
    <div className="gameWrapper mt-4 w-full col-start-4 col-span-3 row-start-2 row-span-3">
      {showSearch && (
        <Search
          setShowSearch={setShowSearch}
          currentGuess={currentGuess}
          correctAnswers={correctAnswers}
        />
      )}
      <div className="gameBoard grid grid-cols-3 gap-4">
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(3);
          }}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="1"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="2"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="3"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="4"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="5"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="6"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="7"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="8"
        ></div>
        <div
          onClick={() => setShowSearch(true)}
          className="cell aspect-[1/1] bg-blue-500 border-2 border-white"
          id="9"
        ></div>
      </div>
    </div>
  );
};

export default LittleGrid;
