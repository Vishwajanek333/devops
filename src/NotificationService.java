public class NotificationService {

    private EmailService emailService;

    public NotificationService(EmailService emailService) {
    this.emailService = emailService;
}
 public void sendNotification(String message) {
    emailService.sendEmail(message);
}
}