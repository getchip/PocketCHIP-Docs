# Applications

![Homescreen](images/homescreen.png)

Your PocketC.H.I.P. comes with six applications on the Home Screen.

* **PICO-8** - play, create, share 8-bit games
* **SUNVOX** - listen or compose electronic music
* **Terminal** - use a Linux shell to run commands
* **Write** - a lightweight text editor
* **File Browser** - a graphical file browser
* **Help** - the same documentation you're reading here, built into to PocketC.H.I.P.

## PICO-8

![PICO-8 icon](images/no_scale/pico8-icon.jpg)

### Play PICO-8

![Playing PICO-8 games](images/pico-play.jpg)

Play games, change games, and make games with PICO-8! With a couple keystrokes, you can join the PICO-8 community and modify their games, or even make your own!

For more resources to learn PICO-8, search YouTube for **PICO-8** videos and check out the PICO-8 Fanzine [link](https://sectordub.itch.io/pico-8-fanzine-1).

![Splore all the games](images/pico-splore-with-hands.jpg)

**PICO-8** starts in **splore mode**, which lets you select which game to load.

If PocketC.H.I.P. is connected to WiFi, **PICO-8 community made games** can be downloaded and played here. Navigate the menus using the arrow keys, and press 0 to select a game.

* **Favourites:** Save games to this list by pressing **ESC** while in the game and selecting “Favourite”. Games on this list are playable even when you're not connected to WiFi.
* **New:** Lists the newest additions to the PICO-8 community.
* **Featured:** Lists the top-rated games from the PICO-8 community.
* **Work In Progress:** Lists recent releases of unfinished games submitted by members of the community.
* **Collaboration:** Lists user-submitted resources, remixes, and other useful things for others to use in their creations.
* **Search:** Performs a text search of PICO-8's game library
* **/:** Lets you navigate the PICO-8 folders on your PocketC.H.I.P.

While in the splore mode, press **ESC** and select **EXIT TO CONSOLE** to start PICO-8's command line interface. PICO-8's command line commands are listed below:

* **Help** 	lists the available commands
* **Splore** 	return to cart explorer
* **dir**        list the contents of the current directory
* **cd [directory name]**   change to the desired directory
* **cd ..**      go up a directory
* **cd /**       change back to top directory (on PICO-8's virtual drive)
* **keyconfig** customize the keys used by all games
* **mkdir**      make a new directory
* **folder**     open the current directory in the host operating system's file browser
* **load [name of game]**  load a game from the current directory (this is like putting a cartridge into the console)
* **run** 	plays the cart that is currently loaded
* **save [filename]** 	saves the currently loaded cart with the given name (this is used when you've made changes to the game's code, graphics, or music)


### Make Games (with PICO-8)

![Edit Screens](images/pico8-icon-callout.png)

Gamers, get ready to become game-makers. In addition to playing the community's games, PICO-8 allows you to modify existing games, or create games of your own using the code, graphics, and sound editors. See the image above to learn which icon stands for which editing mode, and keep reading for an explanation of each mode.

### Code Editor

![Write your own PICO-8 games](images/pico-code.jpg)

**Access the code editor** from the command line by pressing **ESC**. If you are in the middle of a game, press **ESC** and select **EDIT THIS CART** to  edit the game's code. Some other helpful shortcuts are:

* **Hold SHIFT** to select multiple characters or lines (or tap-and-drag)
* **CTRL-X**, **CTRL-C**, **CTRL-V** to cut, copy, or paste a selection
* **CTRL-Z**, **CTRL-Y** to undo, redo
* **CTRL-F**, **CTRL-G** to search for text, repeat search
* **ALT-UP**, **ALT-DOWN** to navigate to the previous, next function


The code editor is not the only editor in PICO-8. Access the other editors by tapping on the icons in the upper right-hand corner of the editor.

### Sprite Editor

![Draw custom graphics](images/pico-sprites.jpg)

Use the sprite editor to create the artwork that make up tiles, characters, or other graphical elements of the game. The navigator at the bottom of the sprite editor screen shows an 8x8 pixel box that is displayed in the sprite sheet window, but it is possible to use freeform tools (pan, select) to edit larger areas.

Use the following tools to edit sprites:

**_Draw Tool_**

* Click on the desired color and then click in the editor window to apply the color to each pixel.
* Hold the **CTRL** button and click on a pixel to replace all of the same-colored pixels in the window with the selected color.

**_Stamp Tool_**
* Select an area of the sprite sheet that you want to copy using the select tool.
* Select the stamp tool and click the location where you want the copied pixels to be pasted.
* Hold **CTRL** to stamp with transparency (this pastes all of the non-black pixels in the selection).

**_Select Tool_**
* Use the shortcut: **SHIFT** or **S** to save time.
* Click and drag with the select tool to highlight an area of the sprite sheet.
* Enter or click to select none.

**_Pan Tool_**
* Use the shortcut: **Spacebar**.
* Click and drag to move around the sprite sheet.

**_Fill Tool_**
* Fill an area with the selected color.
* If you have selected an area of the sprite sheet, the fill will be limited to the selected area.
* If no selection is active, the fill will be limited to the area in the editor window.

### Map Editor
![Create your own levels](images/map.jpg)

The tools for the map editor work similarly to those in the sprite editor. However, rather than choosing colors and drawing directly on the map sheet, select a sprite and use the draw or fill tool to place sprites into the map sheet.

### Sound Effects Editor

![Customize sound effects](images/pico-soundfx.jpg)

PICO-8's sound editor has two view modes: **graph view** and **tracker view**. Switch between modes by tapping on the graph and tracker buttons in the upper-left corner of the sound editor.

In both views, the number in the top left, under the view selector is the sound effect number. PICO-8 can handle **64 different effects**.

**Change the speed of the sound** by clicking on the number in the box labelled **SPD**. Tap and drag to change the value (dragging left decreases, dragging right increases). The **SPD value describes the duration of each note**, so the higher the value, the slower the sound will play.

The **LOOP values** define the start and end points of a section of the sound effect that repeats. These can be changed by tapping and dragging like the SPD values.

Select from the **eight available instruments** by clicking on the gray waveform boxes below the SPD and LOOP fields.

Press the **spacebar to play/stop** the current sound effect.

### Graph mode

In **graph mode**, **choose an instrument** and then click-and-drag left-to-right to *draw* the sound across the pitch window. Draw higher in the window to create a sound with a higher pitch. Adjust the volume of each note, with the sliders in the volume window at the bottom of the graph mode screen.

### Tracker mode
In the **tracker mode**, each line of **six dots represents a note**. Each dot represents an aspect of the notes. In left-to-right order they are: frequency, octave, instrument, volume, and effect.

**_Frequency_**
* Denoted by the letter of the musical pitch.
* Input the pitches, using the **q2w3er5t6y7ui** keys like a piano.
* **Q** is a *C* note, **W** is a *D* note.
* The number keys are the **sharps** and **flats** (like the black keys on a piano).

**_Octave_**

For each note, **choose octave 1**, **2**, **3**, or **4** in the **OCT field** at the top, or type the corresponding number: **1 is the lowest octave** and **4 is the highest**.

**_Instrument_**

Choose one of the instruments in the gray waveform boxes or type the corresponding number (0 through 7).

**_Volume_**

Choose volume level in the VOL field or type the corresponding number (0 through 7).

**_Effect_**

Choose an effect from the boxes under the instruments or type the corresponding number (0 through 7).
The 8 effects are:

* **0** - none
* **1** - slide
* **2** - vibrato
* **3** - drop
* **4** - fade in
* **5** - fade out
* **6** - fast arpeggio
* **7** - slow arpeggio

### Music Editor
![Compose your soundtrack](images/pico-music.jpg)

The **music editor** allows **up to four effects at a time** for your game's soundtrack. Click on the boxes above each column to activate the track and choose which effects will be included in each song pattern.

**Patterns** can be set to move to the next pattern, repeat the current pattern, or stop when finished with the arrow and stop icons on the upper right.

**PICO-8** can hold up to **64 song patterns**.


## SunVox

![SunVox Icon](images/no_scale/sunvox-icon.png)

The **SunVox tracker** is a fully featured music production studio. It's lightweight, sounds great, and is designed to work with a stylus on a single, small screen. As a result, it's a perfect fit for for making music and playing with sound on PocketC.H.I.P..

To get started launch **SunVox**, put on some headphones, press **SHIFT-space** to start playback, and dive into a complete world of electronic sound. While SunVox is pretty much limitless in its configuration, C.H.I.P. has limited CPU and memory resources. Keep in mind if you add a lot of filters, reverbs, and delays, SunVox might stutter on playback. It's also a good idea to quit any other processes running on C.H.I.P. using `ALT-tab` to go to other applications and windows and `CTL-q` to quit them.

### Interface Overview
Here's a quick overview of what you see when you launch **SunVox**, and what the different parts of the interface do. Visit [the SunVox page](http://www.warmplace.ru/wiki/sunvox:manual_en) for more information, including complete keyboard mappings. There are also lots of introductory SunVox videos on YouTube, just search for **SunVox intro videos**.

![SunVox screen areas notated](images/sunvox_editpattern_callout.jpg)

### Keyboard Shortcuts

We've modified some of the default keyboard shortcuts to work better with the PocketC.H.I.P. keyboard. Here's what's different:

Command | Keys
--- | ---
play | Shift-space
stop | Shift-v
play from beginning | Shift-b
play pattern | Shift-n
record | Shift-r
octaves 0-8 | Shift-[0-8]

### Pattern Editor

![SunVox pattern editor](images/sunvox_editpattern.jpg)

The **Pattern Editor** is **like a page of sheet music**. Instead of staffs, measures, clefs, notes, and articulations, it has 32 rows and several columns that represent pitch, timing, and even how a pitch is played (soft, hard, bright, *etc*).

**Patterns represent chunks of a song** that will later be dropped into the timeline of the song and arranged with other patterns.

**Note:** All the numbers are in **hexadecimal**, so instead of the number *46*,  you'll see *2E*. These notes can play drums, lead instruments that sound like a guitar (maybe), bass notes, or even atonal washes of sound.

In the **pattern editor** you can **add notes and note modifiers to compose patterns**.

**Spacebar** toggles edit mode on and off, use the **arrow keys** to select rows, use **letters** to enter notes, use **numbers** to enter (hexadecimal) values for velocity, module, and control values.

### Touch Keyboard
The **Touch Keyboard** is in the middle of the screen. Tap on it and you'll hear sound.

If you're editing a **Pattern**, you can use this to enter notes. Just tap in the first column in the editor where you want a note to play and then tap the note on the touch keyboard. The editor will record the note you play and then move to the next line so you can tap the next note you want to play.

You can also use **PocketC.H.I.P.'s QWERTY keyboard** to enter notes. To enter notes on the QWERTY keyboard, use it similar to a piano. For example, **Z is a c note** and **X is a d note**.

From left to right across the bottom row of the keyboard, the notes ascend.

For **sharp** and **flat** notes, use the row above. For example, **S** is a c-sharp because it is above and between the **Z** and **X** keys (similar to where the c-sharp key is on a piano, above and between the c and d notes).

### Modules (synths and effects)

![SunVox modules](images/sunvox_modules.jpg)

The **Module Editor** is located below the **Touch Keyboard** on its right. This includes the **different instruments**, **synthesizers**, or **effects** you can use to change the sounds that you put into the patterns above. You can add new modules, delete current modules or rearrange modules to fit your needs.

With any sounds you make, you need something to generate the sound first. Double-tap on the background in the **module editor** and then choose a **generator** from the list. Once you've picked a generator need to **connect it to the output**. Do this by **holding SHIFT** and then tapping and dragging from the generator to the OUT box

You can also add **effects** to the sounds made by the generator. Double-tap in the background again and choose an effect from the list. Now change the route the sound goes through by tapping and dragging from the generator to the effect. Then tap-and-drag from the effect to the output box.

You can have **multiple instruments** and **different paths** for the sound in the editor at one time. When editing patterns, tap on the generator you want to use and then edit the pattern. Changes to the pattern will be made using the currently selected generator.

**To delete an effect or generator**, double-tap the module and tap the delete button.

### Parameter Controls
**Parameter Controls** for the currently selected module are in the bottom left corner of the interface. Violin players can bend a string and change how they bow, vocalists can shape their mouths and vocal chords, electric guitarists can stomp on pedals and hit the whammy bar, synthesizer nerds can turn knobs and sliders. In SunVox, you can modify how a synth or effect sounds using the horizontal sliders in the Parameter Controls.

Tap on a module and use the Parameter Controls on the left to modify the sound. Play the (piano or PocketC.H.I.P.) keyboard to hear the sound of a synth module. Use **CTRL-arrows** to jump to different modules. **SHIFT-drag** to connect and disconnect modules.

**_Resize Handles_**

Tap-and-drag in these areas to resize the panels.

**_Transport_**

Record new pattern into timeline, play from beginning, play, play pattern, stop.

#### Octave Up/Down
Change the octave of the touch keyboard.

**_Edit Pattern Indicator_**

When locked, you can't make changes to the pattern.

**Spacebar** unlocks the world of pattern editing!

**_Volume_**

Tap-and-drag the volume control to change output volume.

**_Menu Items_**

Sunvox has one simple menu. Tap here to save and load projects, set preferences like **MIDI controllers**, and the ultra-fun **Touch Theremin** feature! Select it in the Menu, and start making some noise!

**_Switch To Timeline_**

The **Timeline** allows you to place, move, and rearrange patterns to create a song. On PocketC.H.I.P.'s small screen, you'll need to use the **Switch To Timeline** button.

In **Timeline**, you can also freely record notes while you play them with the **Record** button, or you can clone patterns to repeat them. Move the patterns blocks around to create your composition. When finished, you can render a finished stereo file and distribute it as you want!

![SunVox timeline view](images/sunvox_timeline.jpg)

**_MIDI_**

You can attach a **MIDI keyboard or controller** to PocketC.H.I.P.'s USB port and have even more fun with SunVox. Not only can you play notes from a keyboard, but you can use MIDI knobs and sliders to control parameters of different synths. Tweak on!

## Terminal

![image of terminal](images/no_scale/terminal-icon.png)

Many may find the **Terminal** archaic or intimidating, it's a place to **type commands directly to the computer** for execution and evaluation by the operating system. There are no icons, just text.

Use the terminal to dive into the operating system’s guts, quickly move files around, play with PocketC.H.I.P.'s GPIO, or extend its capabilities. There's a primer on using Terminal in the C.H.I.P. documentation [here](http://docs.getchip.com/chip.html#using-the-terminal) if you want to learn more.

### Terminal Top Buttons

![Terminal buttons](images/no_scale/application_terminal_top.jpg)

The Terminal has a few small buttons at top.  From left to right, they are:

  * New Tab
  * Close Tab
  * Zoom in (increase font size)
  * Zoom out (decrease font size)
  * Copy selected text
  * Previous tab
  * Next tab
  * Flip toolbar
  * Paste - Paste selected text (can be from another tab, not in another application)
 
## Write

![image of write](images/no_scale/write-icon.png)

**Write is a minimalist text editor** that's well suited for basic text entry tasks. If you're looking to code with Write, you'll be pleased to learn that it supports line numbering and auto indentation, just look under the “Option” menu.


## File Browser

![image of file browser](images/no_scale/browser-icon.png)

The **File Browser** provides a **visual representation** of the files on your PocketC.H.I.P. using icons. Drag, drop, and double-click your way through this application for full control over every file on your device.

##Help

![image of help icon](images/no_scale/help-icon.jpg)

You are reading it right now. No kidding! This document is available online and locally on PocketC.H.I.P., which means anywhere PocketC.H.I.P. goes, help will be right there with it.
