import { Injectable } from '@angular/core';
import { ChatAdapter, User, Message, UserStatus } from '../components/ng-chat';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';

@Injectable()
export class GlobeAdapter extends ChatAdapter {
    private mockedUsers: User[] = [
    {
        id: 1,
        displayName: 'Arya Stark',
        avatar: 'https://pbs.twimg.com/profile_images/894833370299084800/dXWuVSIb.jpg',
        status: UserStatus.Online
    }];

    constructor(private  http: HttpService) {
        super();


    }

    listFriends(): Observable<User[]> {

        return this.http.get('/chats');
    }

    getMessageHistory(user_id: any): Observable<Message[]> {
        let mockedHistory: Array<Message>;

        return this.http.get(`/messages/getmessagebyuserid/${user_id}`);
    }

    sendMessage(message: Message): void {

        this.http.post('/messages', {for_id: message.for_id, content: message.message, }).subscribe();


    }
}
