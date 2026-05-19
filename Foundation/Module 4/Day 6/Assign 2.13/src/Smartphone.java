
public class Smartphone implements Camera,MusicPlayer{
	
	@Override
	public void capturePhoto() {
		System.out.println("Camera can Capture Photos and Record Videos");
	}
	
	@Override
	public void playMusic() {
		System.out.println("Music Player can play music and enjoy it");
		
	}

}
