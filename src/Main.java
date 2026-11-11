public class Main {

    public static void main(String[] args) {

        EmailService email = new EmailService();

        NotificationService notification =
                new NotificationService(email);

        notification.sendNotification("Welcome to our application!");
    }
}