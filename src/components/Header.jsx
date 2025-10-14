import { Book, BookCheck, Hash } from "lucide-react"
import "./Header.css"

const Header = () => {
  return (
    <>
    <header>
        <BookCheck size={20} strokeWidth={3} className="headIcon" color="blue" />
        <h2>Invoice Generator</h2>
    </header>
    </>
  )
}

export default Header