# Submerge and Shake
<b>Objective</b><br>
Activate a vibration motor when a moisture sensor is completely submerged in liquid.
<br>
<ul><b>Practical Uses</b>
  <li>Cooking: tool automatically vibrates or mixes when it contacts liquid.</li>
  <li>Keeping moisture off items: if an object gets wet, keep moisture off by vibrating.(this would require a lower "moisture level" to initiate the vibrations than I had used in my code)</li>
</ul>
  <ol><b>Materials</b>
  <dd>I used the <i>Grove Inventor Kit for micro:bit</i>. The specific materials I used are displayed below.
  <dd><img width="200" alt="Screen Shot 2022-12-12 at 9 14 53 PM" src="https://user-images.githubusercontent.com/113719459/207232492-fe8c7cf3-4cf0-40dc-a899-9eebbd9b2bc4.png"></dd>
  <li>BBC micro:bit</li>
  <li>Grove Shield for micro:bit</li>
  <li>Grove - Universal 4 Pin Unbuckled Cable</li>
  <li>Grove - Moisture Sensor</li>
  <li>Grove - Vibration Motor</li>
 </ol>
  <ol><b>Steps</b>
  <li>Create a function to initiate vibration.</li>
  <dd><img width="209" alt="Screen Shot 2022-12-12 at 8 56 05 PM" src="https://user-images.githubusercontent.com/113719459/207230691-5e306c98-ff53-4c34-9c30-4f553f8a721e.png"></dd>
  <dd>When the pin 1 is set to 1, the vibration motor will turn on. The pause ensures that the vibration motor will vibrate for an apppropriate amount of time. Pin 1 is set back to 0 to turn the vibration motor off.</dd>
  <li> In a forever loop, create a variable that reads the mositure sensor, displays the moisture number on the screen of the microbit, and calls vibration when wet.
  <dd><img width="506" alt="Screen Shot 2022-12-12 at 8 56 14 PM" src="https://user-images.githubusercontent.com/113719459/207231569-be53cbbf-ce0d-4312-abea-8ee99231dfa9.png"></dd>
  <dd>When the mositure sensor was completely submerged in water, it displayed a moisture level in the high 40s to high 50s, so I called my vibrations in a 'while' loop accordingly. I had to 'break' my code in the while loop so my code would continuosly recieve another input from my moisture sensor.</dd>
  <li>This is the resultant code in JavaScript:</li>
  <pre>
  let moisture = 0
function vibrate () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    moisture = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 750, 0, 100)
    basic.showNumber(Math.round(moisture))
    basic.clearScreen()
    while (40 <= moisture && moisture <= 65) {
        vibrate()
        break;
    }
})
</pre>
  <dd>Or see both block and JavaScript code <a href="https://makecode.microbit.org/_6zwRvcM2YYtJ">here!</a></dd>
  <li>Next, wire the components. </li>
  <dd>Input the micro:bit into the Grove Shield. Connect Pin 0 (on the Grove Shield) to the Moisture Sensor using the Universal 4 Pin Unbuckled Cables. Then, in the same way, connect Pin 1 to the Vibration Motor. See image below:</dd>
  <dd><img width="447" alt="Screen Shot 2022-12-12 at 9 35 09 PM" src="https://user-images.githubusercontent.com/113719459/207235937-49851fa7-b9b1-4731-b622-8e67c256d1b9.png"></dd>
  <li>Finished!</li>
  <dd>As the video of the final product is too large to be shown here, the video is instead included in the repository as 'SubmergeAndShake.MOV'.</dd>
 </ol>
<b>References</b><br>
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax <br>
https://micromaker.co.uk/innovation-lessons/ <br>
Example Doc: https://github.com/otsop110/microbit-projects
  
