import { Injectable } from '@angular/core';

import { UserModel } from 'app/models';
import { UserPermissions } from 'app/enums/app.enums';

@Injectable()
export class UserService {
	public isConnected: boolean;
	public connectedUser: UserModel;
  public UserPermissions: typeof UserPermissions = UserPermissions;

	public users: UserModel[] = [
		new UserModel({
			id: 1,
			firstName: 'Marina',
			lastName: 'Duca',
			username: 'MarinaDucaAdmin',
			password: '1234',
			email: 'marina@gmail.com',
			phone: '647284624',
			permissions: [
				'VIEW_CONTENT',
				'VIEW_RATINGS',
				'VIEW_PROFILE',
				'ADD_RATINGS',
				'MARK_AS_VISITED',
				'ADD_TO_WISH_LIST',
				'SUGGEST_DESTINATION',
				'ADD_CONTENT',
				'EDIT_CONTENT',
				'ADD_USER_PERMISSION',
				'REMOVE_USER_PERMISSION'
			]
		}),
		new UserModel({
			id: 2,
			firstName: 'Bogdan',
			lastName: 'Anchidin',
			username: 'BogdanAnchidinEditor',
			password: '1234',
			email: 'bogdan@gmail.com',
			phone: '234284624',
			permissions: [
				'VIEW_CONTENT',
				'VIEW_RATINGS',
				'VIEW_PROFILE',
				'ADD_RATINGS',
				'MARK_AS_VISITED',
				'ADD_TO_WISH_LIST',
				'SUGGEST_DESTINATION',
				'ADD_CONTENT',
				'EDIT_CONTENT'
			]
		}),
		new UserModel({
			id: 4,
			firstName: 'Dan',
			lastName: 'Nicolae',
			username: 'DanNicolaeUser',
			password: '1234',
			email: 'dan@gamil.com',
			phone: '144284624',
			permissions: [
				'VIEW_CONTENT',
				'VIEW_RATINGS',
				'VIEW_PROFILE',
				'ADD_RATINGS',
				'MARK_AS_VISITED',
				'ADD_TO_WISH_LIST',
				'SUGGEST_DESTINATION'
			]
		}),
	];

	constructor() {
		if (localStorage.getItem('isConnected') === 'true') {
			this.isConnected = true;
			this.connectedUser = new UserModel(JSON.parse(localStorage.getItem('connectedUser')));
		} else {
			this.isConnected = false;
			this.connectedUser = undefined;
		}
	}

	public login(username: string, password: string): void {
		console.log(username, password)
		this.connectedUser = this.users.find((user) => user.username === username && user.password === password);
		console.log(this.connectedUser)
		localStorage.setItem('isConnected', 'true');
		localStorage.setItem('connectedUser', JSON.stringify(this.connectedUser));
		this.isConnected = true;
	}

	public logout(): void {
		localStorage.setItem('isConnected', 'false');
		localStorage.setItem('connectedUser', undefined);
		this.isConnected = false;
		this.connectedUser = undefined;
	}

	public getUsers(): UserModel[] {
		return this.users;
	}

	public get hasEditingRights(): boolean {
		return this.connectedUser && this.connectedUser.permissions.some((permission) =>
			permission === this.UserPermissions.ADD_CONTENT || permission === this.UserPermissions.EDIT_CONTENT
		);
	}

	public get hasAdminRights(): boolean {
		return this.connectedUser && this.connectedUser.permissions.some((permission) =>
			permission === this.UserPermissions.REMOVE_USER_PERMISSION || permission === this.UserPermissions.ADD_USER_PERMISSION
		);
	}
}
