import { useState } from 'react'
import './App.css'

function Assignment() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>COMPUTER MEDIATED HARM PROJECT</h1>
      <p>
        Option B

You work for Tinder on their Safety by Design team. Given mounting concerns around sexual violence in online dating the company has decided that their next generation dating app needs to better foreground safety of its users across online and face-to-face contexts. The goal of this new direction is to address accusations that dating apps fail to recognize and address emergent ethical considerations in pursuit of profits.

Your job is to propose three tools/features for the next generation of dating apps that explicitly consider the ways that dating apps (inadvertently) perpetuate sexual violence and makes an earnest attempt to keep users safe. Note that the term “online dating technology” is intentionally vague to encourage creative in your proposed solution; it could be a new dating app or an additive device/app/technology for example. Software development is not required, but a visual element to your prototype is (we must be able to “see” your design to some extent). Use of rapid prototyping software like Figma is encouraged, but not required.
      </p>
      <br></br>
      <ul>
        <strong>Grading Rubric:</strong>
          <li>Elucidation of the harms that your respective company and/or its products perpetuate (25%). In the description for each design, we should get a clear sense of which particular harms you wish to mitigate, how they currently happen/occur, and the role that your respective technology/app/feature plays in enabling said harms.</li>
          <li>Description of proposed tech design (25%). A written specification that provides explicit guidance for how your proposed designs will function. Imagine your specification being read by developers at your company; it should serve as a guiding light for design choices.</li>
          <li>Prototyping that addresses harms (35%). There is no required format or “length” for your prototype, although a visual element to the prototype is required (we must be able to “see” it). Please consult your professor about your prototype ideas before submission in order to receive tailored feedback on the appropriateness of your prototyping plans.</li>
          <li>Explanation of how the prototype addresses harms (15%). You should conclude your project by explaining how your prototype addresses the problems discussed. Imagine a journalist wondering “how does this technology help the problems of the product/company's past?” Make it abundantly clear to them.</li>
      </ul>
    </>
  )
}

export default Assignment
