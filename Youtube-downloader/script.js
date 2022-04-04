var convertBtn = document.querySelector('.convert-button');



var URLinput = document.querySelector('.URL-input');convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

app.get('/download', (req,res) => {
	var URL = req.query.URL;res.header('Content-Disposition', 'attachment; filename="video.mp4"');ytdl(URL, {
		format:'mp4'
	}).pipe(res)
})
