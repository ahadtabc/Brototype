
public class Movie {
    String title;
    double rating;
    int duration;

    Movie(String title, double rating, int duration) {
        this.title = title;
        this.rating = rating;
        this.duration = duration;
    }

    void displayMovie() {
        System.out.println("Movie Title: " + title);
        System.out.println("Rating: " + rating);
        System.out.println("Duration: " + duration + " minutes");
        System.out.println("----------------------");
    }
}