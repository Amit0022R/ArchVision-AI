import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import { ArrowRight, Layers, Upload } from "lucide-react";
import Button from "../../components/ui/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ArchVision AI" },
    { name: "description", content: "ArchVision AI is a platform for creating and sharing AI-generated architecture visualizations." },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      
      <section className="hero" >
          <div className="announce" >
            <div className="dot" >
              <div className="pulse" ></div>
            </div>

          <p>Introducing ArchVision-AI</p>
          </div>

          <h1>Reimagine design. Build faster. ArchVision AI</h1>

          <p className="subtitle" >ArchVision AI accelerates how architecture is imagined, rendered, and delivered.</p>

          <div className="actions" >
            <a href="#upload" className="cta" >Launch Your Project <ArrowRight className="icon" /> </a>

            <Button variant="outline" size="lg" className="demo" >
              See It in Action
            </Button>
          </div>

          <div className="upload-shell" id="upload" >
            <div className="grid-overlay" />
              <div className="upload-card" >
                <div className="upload-head" >
                  <div className="upload-icon" ><Layers className="icon" /></div>
                  <h3>Drag & drop or browse files</h3>
                  <p>JPG, PNG • Max size 10MB</p>
                </div>
                <p>Upload images</p>
              </div>        
          </div>

      </section>

      

    </div>
  )
}
