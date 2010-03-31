ImageCarousel
===========

ImageCarousel is an image rotator that was designed for those that might get a little intimidated with the Javascript side of web sites. It's drop dead easy to implement.

![Screenshot](http://pat.cullen.co.za/project/ImageCarousel/Screenshot200x100.png)

How to use
----------

<ol>
	<li>
		Copy your carousel images into their own folder inside your project.
	</li>
	<li>
		Copy ImageCarousel.php into the folder from step one.
	</li>
	<li>
		Download and unzip the ImageCarousel files into your project folder. They should unzip into a folder called 'ImageCarousel'.
	</li>
	<li>
		Copy the following code into the head tag of your website.
		<pre name="code" class="html">
&lt;script src="http://ajax.googleapis.com/ajax/libs/mootools/1.2.4/mootools-yui-compressed.js" language="JavaScript" type="text/javascript" &gt;&lt;/script&gt;
&lt;link href="ImageCarousel/ImageCarousel.css" rel="stylesheet" type="text/css"&gt;
&lt;script src="ImageCarousel/ImageCarousel.js" language="JavaScript" type="text/javascript"&gt;&lt;/script&gt;
		</pre>
	</li>
	<li>
		Copy the following code into your webpage. This will act as the carousel element.
		<pre name="code" class="html">
&lt;div class="ImageCarousel auto" rel="Images/Carousel/" styles="width: 500px; height: 375px;"&gt;&lt;/div&gt;
		</pre>
		You need to change/check:
		<ul>
			<li>The 'rel' attribute should point to the folder where you have stored your images. The url should end with '/'.</li>
			<li>Your images should all have the same dimensions; Check the Carousel 'width' and 'height' match your image dimensions.</li>
		</ul>
	</li>
</ol>
Some more options if you wish to further customize your carousel.
<ul>
	<li>You may add the class 'right' or 'bottom' (or both) to position the numbers in the carousel.</li>
	<li>Adding the class 'fast' or 'slow' will change the duration of the image.</li>
	<li>If you know how, you can move the inline styles into a style tag or external stylesheet. </li>
	<li>You don't need the 'auto' tag if you know how to initialize the carousel manually with javascript. See the javascript class for more details if this is up your street.</li>
</ul>

Screenshots
-----------

![Screenshot](http://pat.cullen.co.za/project/ImageCarousel/Screenshot1.png)
![Screenshot](http://pat.cullen.co.za/project/ImageCarousel/Screenshot2.png)
![Screenshot](http://pat.cullen.co.za/project/ImageCarousel/Screenshot3.png)

