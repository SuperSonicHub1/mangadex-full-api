export = User;
/**
 * Represents a MangaDex user
 */
declare class User extends APIObject {
    /**
     * MangaDex user quicksearch
     * @param {String} query Quicksearch query like a name or description
     */
    static search(query: string): Promise<any>;
    constructor(id: number, request?: boolean, extraArg?: any);
    /**
     * Viewcount
     * @type {String}
     */
    views: string;
    /**
     * Markdown-Formatted Biography
     * @type {String}
     */
    biography: string;
    /**
     * Username
     * @type {String}
     */
    username: string;
    /**
     * User Website URL
     * @type {Object}
     */
    website: any;
    /**
     * Avatar Image URL
     * @type {String}
     */
    avatar: string;
    /**
     * Level ID (Adminstrator, Moderator, etc)
     * @type {Number}
     */
    levelId: number;
    /**
     * Last Seen Timestamp
     * @type {Number}
     */
    timeLastSeen: number;
    /**
     * Joined Timestamp
     * @type {Number}
     */
    timeJoined: number;
    /**
     * Number of Chapters Uploaded
     * @type {Number}
     */
    uploads: number;
    /**
     * Premium Account?
     * @type {Boolean}
     */
    premium: boolean;
    /**
     * Mangadex @ Home Contributor?
     * @type {Boolean}
     */
    mdAtHome: boolean;
    /**
     * Executes User.search() then executes fill() with the most relevent user.
     * @param {String} query Quicksearch query like a name or description
     */
    fillByQuery(query: string): any;
    /**
     * Gets full MangaDex HTTPS link.
     * @param {"id"|"avatar"|"flag"} property A property in this object
     * Unknown properties defaults to MangaDex's homepage
     * @returns {String} String with link
     */
    getFullURL(property: "id" | "avatar" | "flag"): string;
}
import APIObject = require("./apiobject");
