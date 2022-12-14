export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  // recipientId
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
  // content
  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }
    this.props.content = content;
  }
  public get content(): string {
    return this.props.content;
  }
}
