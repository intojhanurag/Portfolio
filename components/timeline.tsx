import TicTacToe from "./tictactoe"
export default function Timeline() {
  return (
    <section className="py-16 border border-blue-900 bg-black px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-8">Education</h2>

          <div className="relative border-l border-green-400 pl-8 space-y-12">
            {/* Education Item 1 */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-green-400 bg-black"></div>
              <div className="mb-2 text-gray-400">2023- 2027</div>
              <h3 className="text-xl font-bold mb-1">Bachelor of Technology in Information Technology</h3>
              <div className="text-green-400 mb-3">Galgotias College of Engg & Technology</div>
              <p className="text-gray-300">
                I am currently pursuing my Bachelor of Technology in Information Technology at Galgotias College, 
                My time here has been instrumental in building a strong foundation in computer science fundamentals and hands-on experience in
                solving real-world problems. The curriculum, combined with the guidance of experienced professors and a
                focus on research-driven learning, has allowed me to explore cutting-edge technologies like machine
                learning, embedded systems, and web development. This environment has significantly shaped my skills and
                instilled a passion for innovation and practical problem-solving.
              </p>
            </div>
            
          </div>
        </div>
        <div >
          <TicTacToe/>
        </div>
          
      </div>
    </section>
  )
}
