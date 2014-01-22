# nyansole

Nyancat in ur console!

## API

### new Nyancat()

Create a new nyancat.

### Nyancat#start()

Start nyancat flying across the screen.

### Nyancat#stop()

Stop nyancat where it is.

### Nyancat#progress(pct)

Set nyancat length to percentage of screen width, for use as progress bar.

### Nyancat#end()

Stop animating the nyancat.

### Nyancat#reset()

Reset the nyancat.

### Events

Nyancat is an EventEmitter!

### Nyancat#on('before draw', fn)

Emitted before the frame is cleared and a new one is drawn.

### Nyancat#on('after draw', fn)

Emitted after the frame has been drawn.

## BSD Licensed
