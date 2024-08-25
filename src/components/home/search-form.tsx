import { ArrowBigRightDash } from "lucide-react";
import { Button } from "../ui/button";

export default function SearchForm() {
  return (
    <div className="hidden absolute z-10 md:grid h-[65vh] place-content-center w-screen">
        <form action="" className="flex gap-4 p-3 items-center w-min bg-primary   rounded-sm">
            <div>
            <label htmlFor="activity">What are you planning</label>
            <input className="" type="text" id="activity" placeholder="Enter your activity"/>
            </div>
            <div>
            <label htmlFor="where">Where?</label>
            <input type="text" id="where" placeholder="Enter your city address"/>
            </div>
            <div>
            <label htmlFor="when">When?</label>
            <input type="text" id="when" placeholder="Anytime"/>
            </div>
            <div>
                <Button className="flex rounded-sm grow" variant={'secondary'}>Search <ArrowBigRightDash /></Button>
            </div>
        </form>
    </div>
  );
}
