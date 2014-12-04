/** @const */
chrome.cast;


/** @const */
chrome.cast.media;


/**
 * @type {string}
 */
chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;


/** @typedef {function(): void} */
chrome.cast.ReceiverActionListener;


/**
 * @type {boolean}
 */
chrome.cast.isAvailable;


/**
 * Initializes the API. Note that either successCallback and errorCallbackwill
 * be invoked once the API has finished initialization. The sessionListenerand
 * receiverListener may be invoked at any time afterwards, and possibly morethan
 * once.
 * @return {void}
 * @param {!chrome.cast.ApiConfig} apiConfig The object with parameters to
 * initialize the API. Must not be null.
 * @param {function()} successCallback
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, INVALID_PARAMETER, EXTENSION_MISSING.
 */
chrome.cast.initialize = function(apiConfig,
    successCallback,
    errorCallback) {};


/**
 * Requests that a receiver application session be created or joined. By
 * default, the SessionRequest passed to the API at initializationtime is used;
 * this may be overridden by passing a different sessionrequest in
 * @return {void}
 * @param {function(chrome.cast.Session)} successCallback
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, INVALID_PARAMETER, API_NOT_INITIALIZED, CANCEL, CHANNEL_ERROR,
 * SESSION_ERROR, RECEIVER_UNAVAILABLE, and EXTENSION_MISSING. Note that the
 * timeout timer starts after users select a receiver. Selecting a receiver
 * requires user's action, which has no timeout.
 * @param {chrome.cast.SessionRequest=} opt_sessionRequest Optional.
 */
chrome.cast.requestSession = function(successCallback,
    errorCallback,
    opt_sessionRequest) {};


/**
 * Requests to join an existing session with the given id. Once joined,
 * thesession will be passed to the sessionListener set by
 * chrome.cast.initialize. If the session with the given sessionId is already
 * known when this functionis called, then sessionListener is called
 * immediately. Otherwise, once asession with the given sessionId is discovered,
 * @return {void}
 * @param {string} sessionId The id of the session to join.
 */
chrome.cast.requestSessionById = function(sessionId) {};


/**
 * Adds a listener function that will be invoked when the user has acted
 * throughthe UI to start or stop casting. The sender application can use this
 * to showa transition in its user interface (i.e., pause locally playing media)
 * beforethe casting action has completed or failed. The listener is not
 * guaranteed to be invoked and applications should not rely on it to function
 * correctly. The listener will be passed the receiver that was acted upon, if
 * available. However the receiver may not be known and null will be passed
 * instead. The listener will be called as soon as possible after the user has
 * acted. It should be invoked before the application is notified of the
 * resulting state change through the API.
 * @return {void}
 * @param {chrome.cast.ReceiverActionListener} listener The listener function to
 * add. The first argument to the listener is the receiver that was acted on.
 * The second argument to the listener is the action that was requested (see
 * chrome.cast. ReceiverAction).
 */
chrome.cast.addReceiverActionListener = function(listener) {};


/**
 * Removes a listener function that was previously added
 * withaddReceiverActionListener.
 * @return {void}
 * @param {chrome.cast.ReceiverActionListener} listener The listener function to
 * remove.
 */
chrome.cast.removeReceiverActionListener = function(listener) {};


/**
 * Logs a debug message from the app. This message may be sent in a
 * feedbackreport to Google if users explicitly choose to include fine logs.
 * @return {void}
 * @param {string} message The message to log.
 */
chrome.cast.logMessage = function(message) {};


/**
 * Sets custom receiver list
 * @return {void}
 * @param {!Array<chrome.cast.Receiver>} receivers The new list. Must not be
 * null.
 * @param {function()} successCallback
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER, CHANNEL_ERROR, and
 * EXTENSION_MISSRING.
 */
chrome.cast.setCustomReceivers = function(receivers,
    successCallback,
    errorCallback) {};


/**
 * Sets the receiver name and display status. To show the receiver as idle,set
 * displayStatus to null. Only valid for CUSTOM receivers. The receiver's
 * displayStatus isignored if this receiver is CAST; Cast receiver status is
 * updated by thereceiver application.
 * @return {void}
 * @param {!chrome.cast.Receiver} receiver The receiver. Must not be null.
 * @param {function()} successCallback Callback when setting status succeeds.
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, INVALID_PARAMETER, API_NOT_INITIALIZED, and EXTENSION_MISSING.
 */
chrome.cast.setReceiverDisplayStatus = function(receiver,
    successCallback,
    errorCallback) {};




/**
 * Describes an error returned by the API. Normally, these objects should not be
 * created by the client.
 * @constructor
 * @param {!chrome.cast.ErrorCode} code The error code. Must not be null.
 * @param {string=} opt_description Description of the error. Optional.
 * @param {Object=} opt_details Details specific to the error. Optional.
 */
chrome.cast.Error = function(code,
    opt_description,
    opt_details) {};


/**
 * The error code. Must not be null.
 * @type {!chrome.cast.ErrorCode}
 */
chrome.cast.Error.prototype.code;


/**
 * Human readable description of the error. May be null.
 * @type {?string}
 */
chrome.cast.Error.prototype.description;


/**
 * Details specific to the error. The description of the error code willinclude
 * the format of the object if one is set.
 * @type {Object}
 */
chrome.cast.Error.prototype.details;




/**
 * Holds the configuraton for the API when initialized.
 * @constructor
 * @param {!chrome.cast.SessionRequest} sessionRequest The session request. Must
 * not be null.
 * @param {function(chrome.cast.Session)} sessionListener A listener to notify
 * when a session is available to the application.
 * @param {function(chrome.cast.ReceiverAvailability)} receiverListener A
 * listener to notify when there is a receiver available.
 * @param {chrome.cast.AutoJoinPolicy=} opt_autoJoinPolicy The auto join policy
 * for the application. Optional.
 * @param {chrome.cast.DefaultActionPolicy=} opt_defaultActionPolicy The default
 * action to take when the user is already casting when the application is
 * initialized. Optional.
 */
chrome.cast.ApiConfig = function(sessionRequest,
    sessionListener,
    receiverListener,
    opt_autoJoinPolicy,
    opt_defaultActionPolicy) {};


/**
 * Determines whether the SDK will automatically connect to a runningsession
 * after initialization. Must not be null.
 * @type {!chrome.cast.AutoJoinPolicy}
 */
chrome.cast.ApiConfig.prototype.autoJoinPolicy;


/**
 * Requests whether the application should be launched on API initializationwhen
 * the tab is already being cast. Apps in embedded content (likeiframes) should
 * set this field to CAST_THIS_TAB if they are not the mainapp on the page. This
 * value also configures the default behavior of theextension popup for the
 * page. Must not be null.
 * @type {!chrome.cast.DefaultActionPolicy}
 */
chrome.cast.ApiConfig.prototype.defaultActionPolicy;


/**
 * Function invoked when the availability of a Cast receiver that supportsthe
 * application in sessionRequest is known or changes. This function willalways
 * be invoked at least once after initialization completes.
 * @type {function(chrome.cast.ReceiverAvailability)}
 */
chrome.cast.ApiConfig.prototype.receiverListener;


/**
 * Listener invoked when a session is created or connected by the SDK. This
 * function may be invoked after initialization, if there is asession that is
 * automatically created or connected. Note thatrequestSession method does not
 * cause this listener to be invoked,since it has its own success callback.
 * @type {function(chrome.cast.Session)}
 */
chrome.cast.ApiConfig.prototype.sessionListener;


/**
 * Describes the session to launch or the session to connect. Must not be null.
 * @type {!chrome.cast.SessionRequest}
 */
chrome.cast.ApiConfig.prototype.sessionRequest;


/**
 * @constructor
 */
chrome.cast.Capability = function() {};


/**
 * The receiver supports audio input (microphone).
 * @type {chrome.cast.Capability}
 */
chrome.cast.Capability.AUDIO_IN;


/**
 * The receiver supports audio output.
 * @type {chrome.cast.Capability}
 */
chrome.cast.Capability.AUDIO_OUT;


/**
 * The receiver supports video input (camera).
 * @type {chrome.cast.Capability}
 */
chrome.cast.Capability.VIDEO_IN;


/**
 * The receiver supports video output.
 * @type {chrome.cast.Capability}
 */
chrome.cast.Capability.VIDEO_OUT;


/**
 * @constructor
 */
chrome.cast.AutoJoinPolicy = function() {};


/**
 * Automatically connects when the session was started with the same appId
 * andthe same page origin (regardless of tab).
 * @type {chrome.cast.AutoJoinPolicy}
 */
chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED;


/**
 * No automatic connection.
 * @type {chrome.cast.AutoJoinPolicy}
 */
chrome.cast.AutoJoinPolicy.PAGE_SCOPED;


/**
 * Automatically connects when the session was started with the same appId,
 * inthe same tab and page origin.
 * @type {chrome.cast.AutoJoinPolicy}
 */
chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;


/**
 * @constructor
 */
chrome.cast.DefaultActionPolicy = function() {};


/**
 * No automatic launch is done after initializing the API, even if the tab
 * isbeing cast. The extension popup prompts the user to cast the tab.
 * @type {chrome.cast.DefaultActionPolicy}
 */
chrome.cast.DefaultActionPolicy.CAST_THIS_TAB;


/**
 * If the tab containing the app is being casted when the API initializes,
 * theSDK stops tab casting and automatically launches the app. The
 * extensionpopup prompts the user to cast the app.
 * @type {chrome.cast.DefaultActionPolicy}
 */
chrome.cast.DefaultActionPolicy.CREATE_SESSION;




/**
 * An image that describes a receiver application or media item. Thiscould be an
 * application icon, cover art, or a thumbnail.
 * @constructor
 * @param {string} url The URL to the image.
 */
chrome.cast.Image = function(url) {};


/**
 * The height of the image. May be null.
 * @type {?number}
 */
chrome.cast.Image.prototype.height;


/**
 * The URL to the image.
 * @type {string}
 */
chrome.cast.Image.prototype.url;


/**
 * The width of the image. May be null.
 * @type {?number}
 */
chrome.cast.Image.prototype.width;




/**
 * A request to modify the text tracks style or change the tracks status. If a
 * trackId does not match the existing trackIds the whole requestwill fail and
 * no status will change. It is acceptable to change the texttrack style even if
 * no text track is currently active.
 * @constructor
 * @param {Array<number>=} opt_activeTrackIds Optional.
 * @param {chrome.cast.media.TextTrackStyle=} opt_textTrackStyle Optional.
 */
chrome.cast.media.EditTracksInfoRequest = function(opt_activeTrackIds,
    opt_textTrackStyle) {};


/**
 * Array of the Track trackIds that should be active. If it is not provided,the
 * active tracks will not change. If the array is empty, no track will be
 * active.
 * @type {Array<number>}
 */
chrome.cast.media.EditTracksInfoRequest.prototype.activeTrackIds;


/**
 * The requested text track style. If it is not provided the existing style will
 * be used. May be null.
 * @type {?chrome.cast.media.TextTrackStyle}
 */
chrome.cast.media.EditTracksInfoRequest.prototype.textTrackStyle;


/**
 * @constructor
 */
chrome.cast.ErrorCode = function() {};


/**
 * The API is not initialized.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.API_NOT_INITIALIZED;


/**
 * The operation was canceled by the user.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.CANCEL;


/**
 * A channel to the receiver is not available.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.CHANNEL_ERROR;


/**
 * The Cast extension is not available.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.EXTENSION_MISSING;


/**
 * The API script is not compatible with the installedCast extension.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.EXTENSION_NOT_COMPATIBLE;


/**
 * The parameters to the operation were not valid.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.INVALID_PARAMETER;


/**
 * Load media failed.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.LOAD_MEDIA_FAILED;


/**
 * No receiver was compatible with the session request.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE;


/**
 * A session could not be created, or a session was invalid.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.SESSION_ERROR;


/**
 * The operation timed out.
 * @type {chrome.cast.ErrorCode}
 */
chrome.cast.ErrorCode.TIMEOUT;


/**
 * @constructor
 */
chrome.cast.media.IdleReason = function() {};


/**
 * A sender requested to stop playback using the STOP command.
 * @type {chrome.cast.media.IdleReason}
 */
chrome.cast.media.IdleReason.CANCELLED;


/**
 * The media was interrupted due to an error, this could be for example ifthe
 * player could not download media due to networking errors.
 * @type {chrome.cast.media.IdleReason}
 */
chrome.cast.media.IdleReason.ERROR;


/**
 * The media playback completed.
 * @type {chrome.cast.media.IdleReason}
 */
chrome.cast.media.IdleReason.FINISHED;


/**
 * A sender requested playing a different media using the LOAD command.
 * @type {chrome.cast.media.IdleReason}
 */
chrome.cast.media.IdleReason.INTERRUPTED;




/**
 * A request to load new media into the player.
 * @constructor
 * @param {!chrome.cast.media.MediaInfo} mediaInfo Media description. Must not
 * be null.
 */
chrome.cast.media.LoadRequest = function(mediaInfo) {};


/**
 * Array of Track trackIds that should be active. If the array is notprovided,
 * the default tracks will be active. If two incompatible trackIds are provided
 * (for example two active audiotracks) the command will fail with
 * INVALID_PARAMETER.
 * @type {Array<number>}
 */
chrome.cast.media.LoadRequest.prototype.activeTrackIds;


/**
 * Whether the media will automatically play.
 * @type {boolean}
 */
chrome.cast.media.LoadRequest.prototype.autoplay;


/**
 * Seconds from the beginning of the media to start playback. May be null.
 * @type {?number}
 */
chrome.cast.media.LoadRequest.prototype.currentTime;


/**
 * Custom data for the receiver application.
 * @type {Object}
 */
chrome.cast.media.LoadRequest.prototype.customData;


/**
 * Media description. Must not be null.
 * @type {!chrome.cast.media.MediaInfo}
 */
chrome.cast.media.LoadRequest.prototype.media;




/**
 * A generic media description.
 * @constructor
 */
chrome.cast.media.GenericMediaMetadata = function() {};


/**
 * Content images. Examples would include cover art or a thumbnail of
 * thecurrently playing media.
 * @type {Array<chrome.cast.Image>}
 */
chrome.cast.media.GenericMediaMetadata.prototype.images;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.GenericMediaMetadata.prototype.metadataType;


/**
 * ISO 8601 date and/or time when the content was released, e.g. 2014-02-10. May
 * be null.
 * @type {?string}
 */
chrome.cast.media.GenericMediaMetadata.prototype.releaseDate;


/**
 * Integer year when the content was released. May be null.
 * @type {?number}
 */
chrome.cast.media.GenericMediaMetadata.prototype.releaseYear;


/**
 * Content subtitle. May be null.
 * @type {?string}
 */
chrome.cast.media.GenericMediaMetadata.prototype.subtitle;


/**
 * Content title. May be null.
 * @type {?string}
 */
chrome.cast.media.GenericMediaMetadata.prototype.title;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.GenericMediaMetadata.prototype.type;




/**
 * A request to get the media status.
 * @constructor
 */
chrome.cast.media.GetStatusRequest = function() {};


/**
 * Custom data for the receiver application.
 * @type {Object}
 */
chrome.cast.media.GetStatusRequest.prototype.customData;


/**
 * @constructor
 */
chrome.cast.media.MediaCommand = function() {};


/**
 * @type {chrome.cast.media.MediaCommand}
 */
chrome.cast.media.MediaCommand.PAUSE;


/**
 * @type {chrome.cast.media.MediaCommand}
 */
chrome.cast.media.MediaCommand.SEEK;


/**
 * @type {chrome.cast.media.MediaCommand}
 */
chrome.cast.media.MediaCommand.STREAM_MUTE;


/**
 * @type {chrome.cast.media.MediaCommand}
 */
chrome.cast.media.MediaCommand.STREAM_VOLUME;




/**
 * Describes a media item.
 * @constructor
 * @param {string} contentId Unique identifier for the media.
 * @param {string} contentType MIME content type of the media.
 */
chrome.cast.media.MediaInfo = function(contentId,
    contentType) {};


/**
 * Identifies the content. Typically a URL, but can be any string identifier.
 * @type {string}
 */
chrome.cast.media.MediaInfo.prototype.contentId;


/**
 * MIME content type of the media.
 * @type {string}
 */
chrome.cast.media.MediaInfo.prototype.contentType;


/**
 * Custom data set by the receiver application.
 * @type {Object}
 */
chrome.cast.media.MediaInfo.prototype.customData;


/**
 * Duration of the content, in seconds. May be null for media with
 * typechrome.cast.media. StreamType. LIVE. May be null.
 * @type {?number}
 */
chrome.cast.media.MediaInfo.prototype.duration;


/**
 * Describes the media content. The value should be one of
 * thechrome.cast.media.*Metadata objects.
 * @type {?}
 */
chrome.cast.media.MediaInfo.prototype.metadata;


/**
 * The type of media stream.
 * @type {chrome.cast.media.StreamType}
 */
chrome.cast.media.MediaInfo.prototype.streamType;


/**
 * The requested text track style. If not provided, the device stylepreferences
 * (if existing) will be used. May be null.
 * @type {?chrome.cast.media.TextTrackStyle}
 */
chrome.cast.media.MediaInfo.prototype.textTrackStyle;


/**
 * Array of Track objects.
 * @type {Array<!chrome.cast.media.Track>}
 */
chrome.cast.media.MediaInfo.prototype.tracks;




/**
 * Represents a media item that has been loaded into the receiver application.
 * @constructor
 * @param {string} sessionId The session identifier.
 * @param {number} mediaSessionId The media identifier.
 */
chrome.cast.media.Media = function(sessionId,
    mediaSessionId) {};


/**
 * List of IDs corresponding to the active Tracks.
 * @type {Array<number>}
 */
chrome.cast.media.Media.prototype.activeTrackIds;


/**
 * The current playback position in seconds since the start of the media. This
 * member is only updated sporadically, so its value is often out ofdate. Use
 * the getEstimatedTime method to get an estimate of thereal playback position
 * based on the last information reported by thereceiver.
 * @type {number}
 */
chrome.cast.media.Media.prototype.currentTime;


/**
 * Custom data set by the receiver application.
 * @type {Object}
 */
chrome.cast.media.Media.prototype.customData;


/**
 * Idle reason if receiver knows. May be null.
 * @type {?chrome.cast.media.IdleReason}
 */
chrome.cast.media.Media.prototype.idleReason;


/**
 * Media description.
 * @type {chrome.cast.media.MediaInfo}
 */
chrome.cast.media.Media.prototype.media;


/**
 * Identifies the media item.
 * @type {number}
 */
chrome.cast.media.Media.prototype.mediaSessionId;


/**
 * The playback rate. 1.0 represents normal playback.
 * @type {number}
 */
chrome.cast.media.Media.prototype.playbackRate;


/**
 * The player state. Must not be null.
 * @type {!chrome.cast.media.PlayerState}
 */
chrome.cast.media.Media.prototype.playerState;


/**
 * Identifies the session that is hosting the media.
 * @type {string}
 */
chrome.cast.media.Media.prototype.sessionId;


/**
 * The media commands supported by the media player. Must not be null.
 * @type {!Array<!chrome.cast.media.MediaCommand>}
 */
chrome.cast.media.Media.prototype.supportedMediaCommands;


/**
 * The media stream volume. volume.level and volume.muted will always be set.
 * Must not be null.
 * @type {!chrome.cast.Volume}
 */
chrome.cast.media.Media.prototype.volume;


/**
 * Gets the status of the media item from the receiver application. Along with
 * the given successCallback, any added media update listenerswill also be
 * invoked when the status is received from the receiverapplication. Instead of
 * calling this method to poll the media status, appsshould prefer relying on
 * the automatic invocation of media update listenerswhenever the media changes.
 * @return {void}
 * @param {chrome.cast.media.GetStatusRequest} getStatusRequest The optional get
 * status request.
 * @param {function()} successCallback Invoked when the status is received from
 * the receiver application.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.media.Media.prototype.getStatus = function(getStatusRequest,
    successCallback,
    errorCallback) {};


/**
 * Plays the media item.
 * @return {void}
 * @param {chrome.cast.media.PlayRequest} playRequest The optional media play
 * request.
 * @param {function()} successCallback Invoked on success.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.media.Media.prototype.play = function(playRequest,
    successCallback,
    errorCallback) {};


/**
 * Pauses the media item.
 * @return {void}
 * @param {chrome.cast.media.PauseRequest} pauseRequest
 * @param {function()} successCallback Invoked on success.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * media pause request. The possible errors are TIMEOUT, API_NOT_INITIALIZED,
 * INVALID_PARAMETER, CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.media.Media.prototype.pause = function(pauseRequest,
    successCallback,
    errorCallback) {};


/**
 * Seeks the media item.
 * @return {void}
 * @param {!chrome.cast.media.SeekRequest} seekRequest The media seek request.
 * Must not be null.
 * @param {function()} successCallback Invoked on success.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.media.Media.prototype.seek = function(seekRequest,
    successCallback,
    errorCallback) {};


/**
 * Stops the media player.
 * @return {void}
 * @param {chrome.cast.media.StopRequest} stopRequest The stop request.
 * @param {function()} successCallback Invoked on success.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.media.Media.prototype.stop = function(stopRequest,
    successCallback,
    errorCallback) {};


/**
 * Sets the media stream volume. At least one of volumeRequest.level
 * orvolumeRequest.muted must be set. Changing the mute state does not affect
 * thevolume level, and vice versa.
 * @return {void}
 * @param {!chrome.cast.media.VolumeRequest} volumeRequest The set volume
 * request. Must not be null.
 * @param {function()} successCallback Invoked on success.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.media.Media.prototype.setVolume = function(volumeRequest,
    successCallback,
    errorCallback) {};


/**
 * Modifies the text tracks style or change the tracks status. If a trackId does
 * not match the existing trackIds the whole requestwill fail and no status will
 * change.
 * @return {void}
 * @param {!chrome.cast.media.EditTracksInfoRequest} editTracksInfoRequest Must
 * not be null.
 * @param {function()} successCallback Invoked on success.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.media.Media.prototype.editTracksInfo = function(editTracksInfoRequest,
    successCallback,
    errorCallback) {};


/**
 * Determines whether the media player supports the given media command.
 * @return {boolean}
 * @param {!chrome.cast.media.MediaCommand} command The command to query. Must
 * not be null.
 */
chrome.cast.media.Media.prototype.supportsCommand = function(command) {};


/**
 * Estimates the current playback position based on the last informationreported
 * by the receiver.
 * @return {number}
 */
chrome.cast.media.Media.prototype.getEstimatedTime = function() {};


/**
 * Adds a listener that is invoked when the status of the media has changed.
 * Changes to the following properties will trigger the listener:
 * currentTime,volume, metadata, playbackRate, playerState, customData. A
 * successful call tothe media's getStatus method will also trigger the
 * @return {void}
 * @param {function(boolean)} listener The listener to add. The parameter
 * indicates whether the Media object is still alive.
 */
chrome.cast.media.Media.prototype.addUpdateListener = function(listener) {};


/**
 * Removes a previously added listener for this Media.
 * @return {void}
 * @param {function(boolean)} listener The listener to remove.
 */
chrome.cast.media.Media.prototype.removeUpdateListener = function(listener) {};




/**
 * A music track media description.
 * @constructor
 */
chrome.cast.media.MusicTrackMediaMetadata = function() {};


/**
 * Album artist name. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.albumArtist;


/**
 * Album name. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.albumName;


/**
 * Track artist name. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.artist;


/**
 * Track artist name. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.artistName;


/**
 * Track composer name. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.composer;


/**
 * Disc number. A positive integer. May be null.
 * @type {?number}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.discNumber;


/**
 * Content images. Examples would include cover art or a thumbnail of
 * thecurrently playing media.
 * @type {Array<chrome.cast.Image>}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.images;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.metadataType;


/**
 * ISO 8601 date when the track was released, e.g. 2014-02-10. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.releaseDate;


/**
 * Integer year when the album was released. May be null.
 * @type {?number}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.releaseYear;


/**
 * Track name. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.songName;


/**
 * Track title. May be null.
 * @type {?string}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.title;


/**
 * Track number in album. A positive integer. May be null.
 * @type {?number}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.trackNumber;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MusicTrackMediaMetadata.prototype.type;




/**
 * A request to pause the currently playing media.
 * @constructor
 */
chrome.cast.media.PauseRequest = function() {};


/**
 * Custom data for the receiver application.
 * @type {Object}
 */
chrome.cast.media.PauseRequest.prototype.customData;


/**
 * @constructor
 */
chrome.cast.media.MetadataType = function() {};


/**
 * Generic template suitable for most media types. Used by chrome.cast.media.
 * GenericMediaMetadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MetadataType.GENERIC;


/**
 * A full length movie. Used by chrome.cast.media. MovieMediaMetadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MetadataType.MOVIE;


/**
 * A music track. Used by chrome.cast.media. MusicTrackMediaMetadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MetadataType.MUSIC_TRACK;


/**
 * Photo. Used by chrome.cast.media. PhotoMediaMetadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MetadataType.PHOTO;


/**
 * An episode of a TV series. Used by chrome.cast.media. TvShowMediaMetadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MetadataType.TV_SHOW;




/**
 * A movie media description.
 * @constructor
 */
chrome.cast.media.MovieMediaMetadata = function() {};


/**
 * Content images. Examples would include cover art or a thumbnail of
 * thecurrently playing media.
 * @type {Array<chrome.cast.Image>}
 */
chrome.cast.media.MovieMediaMetadata.prototype.images;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MovieMediaMetadata.prototype.metadataType;


/**
 * ISO 8601 date when the movie was released, e.g. 2014-02-10. May be null.
 * @type {?string}
 */
chrome.cast.media.MovieMediaMetadata.prototype.releaseDate;


/**
 * Integer year when the content was released. May be null.
 * @type {?number}
 */
chrome.cast.media.MovieMediaMetadata.prototype.releaseYear;


/**
 * Movie studio. May be null.
 * @type {?string}
 */
chrome.cast.media.MovieMediaMetadata.prototype.studio;


/**
 * Movie subtitle. May be null.
 * @type {?string}
 */
chrome.cast.media.MovieMediaMetadata.prototype.subtitle;


/**
 * Movie title. May be null.
 * @type {?string}
 */
chrome.cast.media.MovieMediaMetadata.prototype.title;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.MovieMediaMetadata.prototype.type;


/**
 * @constructor
 */
chrome.cast.media.PlayerState = function() {};


/**
 * Player is in PLAY mode but not actively playing content.currentTime will not
 * change.
 * @type {chrome.cast.media.PlayerState}
 */
chrome.cast.media.PlayerState.BUFFERING;


/**
 * No media is loaded into the player.
 * @type {chrome.cast.media.PlayerState}
 */
chrome.cast.media.PlayerState.IDLE;


/**
 * The media is not playing.
 * @type {chrome.cast.media.PlayerState}
 */
chrome.cast.media.PlayerState.PAUSED;


/**
 * The media is playing.
 * @type {chrome.cast.media.PlayerState}
 */
chrome.cast.media.PlayerState.PLAYING;




/**
 * A request to play the currently paused media.
 * @constructor
 */
chrome.cast.media.PlayRequest = function() {};


/**
 * Custom data for the receiver application.
 * @type {Object}
 */
chrome.cast.media.PlayRequest.prototype.customData;


/**
 * @constructor
 */
chrome.cast.media.ResumeState = function() {};


/**
 * Force media to pause.
 * @type {chrome.cast.media.ResumeState}
 */
chrome.cast.media.ResumeState.PLAYBACK_PAUSE;


/**
 * Force media to start.
 * @type {chrome.cast.media.ResumeState}
 */
chrome.cast.media.ResumeState.PLAYBACK_START;




/**
 * A photo media description.
 * @constructor
 */
chrome.cast.media.PhotoMediaMetadata = function() {};


/**
 * Name of the photographer. May be null.
 * @type {?string}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.artist;


/**
 * ISO 8601 date and time the photo was taken, e.g. 2014-02-10T15:47:00Z. May be
 * null.
 * @type {?string}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.creationDateTime;


/**
 * Photo height, in pixels. May be null.
 * @type {?number}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.height;


/**
 * Images associated with the content. Examples would include a photothumbnail.
 * @type {Array<chrome.cast.Image>}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.images;


/**
 * Latitude. May be null.
 * @type {?number}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.latitude;


/**
 * Location where the photo was taken. For example, "Seattle, Washington,USA".
 * May be null.
 * @type {?string}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.location;


/**
 * Longitude. May be null.
 * @type {?number}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.longitude;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.metadataType;


/**
 * Photo title. May be null.
 * @type {?string}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.title;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.type;


/**
 * Photo width, in pixels. May be null.
 * @type {?number}
 */
chrome.cast.media.PhotoMediaMetadata.prototype.width;




/**
 * A request to stop the media player.
 * @constructor
 */
chrome.cast.media.StopRequest = function() {};


/**
 * Custom data for the receiver application.
 * @type {Object}
 */
chrome.cast.media.StopRequest.prototype.customData;


/**
 * @constructor
 */
chrome.cast.media.StreamType = function() {};


/**
 * Stored media streamed from an existing data store.
 * @type {chrome.cast.media.StreamType}
 */
chrome.cast.media.StreamType.BUFFERED;


/**
 * Live media generated on the fly.
 * @type {chrome.cast.media.StreamType}
 */
chrome.cast.media.StreamType.LIVE;


/**
 * None of the above.
 * @type {chrome.cast.media.StreamType}
 */
chrome.cast.media.StreamType.OTHER;


/**
 * @constructor
 */
chrome.cast.media.TextTrackEdgeType = function() {};


/**
 * @type {chrome.cast.media.TextTrackEdgeType}
 */
chrome.cast.media.TextTrackEdgeType.DEPRESSED;


/**
 * @type {chrome.cast.media.TextTrackEdgeType}
 */
chrome.cast.media.TextTrackEdgeType.DROP_SHADOW;


/**
 * @type {chrome.cast.media.TextTrackEdgeType}
 */
chrome.cast.media.TextTrackEdgeType.NONE;


/**
 * @type {chrome.cast.media.TextTrackEdgeType}
 */
chrome.cast.media.TextTrackEdgeType.OUTLINE;


/**
 * @type {chrome.cast.media.TextTrackEdgeType}
 */
chrome.cast.media.TextTrackEdgeType.RAISED;




/**
 * A request to seek the current media.
 * @constructor
 */
chrome.cast.media.SeekRequest = function() {};


/**
 * The new current time for the media, in seconds after the start of themedia.
 * If the media type is chrome.cast.media. StreamType. LIVE, thencurrentTime is
 * optional; if not set, the stream will resume at the livemedia position. May
 * be null.
 * @type {?number}
 */
chrome.cast.media.SeekRequest.prototype.currentTime;


/**
 * Custom data for the receiver application.
 * @type {Object}
 */
chrome.cast.media.SeekRequest.prototype.customData;


/**
 * The desired media player state after the seek is complete. If unset, itwill
 * retain the state it had before seeking. May be null.
 * @type {?chrome.cast.media.ResumeState}
 */
chrome.cast.media.SeekRequest.prototype.resumeState;


/**
 * @constructor
 */
chrome.cast.media.TextTrackFontStyle = function() {};


/**
 * @type {chrome.cast.media.TextTrackFontStyle}
 */
chrome.cast.media.TextTrackFontStyle.BOLD;


/**
 * @type {chrome.cast.media.TextTrackFontStyle}
 */
chrome.cast.media.TextTrackFontStyle.BOLD_ITALIC;


/**
 * @type {chrome.cast.media.TextTrackFontStyle}
 */
chrome.cast.media.TextTrackFontStyle.ITALIC;


/**
 * @type {chrome.cast.media.TextTrackFontStyle}
 */
chrome.cast.media.TextTrackFontStyle.NORMAL;




/**
 * Describes style information for a text track. Colors are represented as
 * strings “#RRGGBBAA” where XX are the twohexadecimal symbols that represent
 * the 0-255 value for the specificchannel/color. It follows CSS 8-digit hex
 * color notation(See http://dev.w3.org/csswg/css-color/#hex-notation).
 * @constructor
 */
chrome.cast.media.TextTrackStyle = function() {};


/**
 * Background RGBA color, represented as "#RRGGBBAA". The alpha channel should
 * be used for transparent backgrounds. May be null.
 * @type {?string}
 */
chrome.cast.media.TextTrackStyle.prototype.backgroundColor;


/**
 * Custom application data.
 * @type {Object}
 */
chrome.cast.media.TextTrackStyle.prototype.customData;


/**
 * RGBA color for the edge, represented as "#RRGGBBAA". This value will be
 * ignored if edgeType is NONE. May be null.
 * @type {?string}
 */
chrome.cast.media.TextTrackStyle.prototype.edgeColor;


/**
 * May be null.
 * @type {?chrome.cast.media.TextTrackEdgeType}
 */
chrome.cast.media.TextTrackStyle.prototype.edgeType;


/**
 * If the font is not available in the receiver the fontGenericFamily will
 * beused. May be null.
 * @type {?string}
 */
chrome.cast.media.TextTrackStyle.prototype.fontFamily;


/**
 * May be null.
 * @type {?chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackStyle.prototype.fontGenericFamily;


/**
 * The font scaling factor for the text track (the default is 1.0). May be null.
 * @type {?number}
 */
chrome.cast.media.TextTrackStyle.prototype.fontScale;


/**
 * May be null.
 * @type {?chrome.cast.media.TextTrackFontStyle}
 */
chrome.cast.media.TextTrackStyle.prototype.fontStyle;


/**
 * Foreground RGBA color, represented as "#RRGGBBAA". May be null.
 * @type {?string}
 */
chrome.cast.media.TextTrackStyle.prototype.foregroundColor;


/**
 * RGBA color for the window, represented as "#RRGGBBAA". This value will be
 * ignored if windowType is NONE. May be null.
 * @type {?string}
 */
chrome.cast.media.TextTrackStyle.prototype.windowColor;


/**
 * Rounded corner radius absolute value in pixels (px). This value will be
 * ignored if windowType is not ROUNDED_CORNERS. May be null.
 * @type {?number}
 */
chrome.cast.media.TextTrackStyle.prototype.windowRoundedCornerRadius;


/**
 * The window concept is defined in CEA-608 and CEA-708,
 * Seehttp://goo.gl/M3ea0X. In WebVTT is called a region. May be null.
 * @type {?chrome.cast.media.TextTrackWindowType}
 */
chrome.cast.media.TextTrackStyle.prototype.windowType;


/**
 * @constructor
 */
chrome.cast.media.TextTrackFontGenericFamily = function() {};


/**
 * @type {chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackFontGenericFamily.CASUAL;


/**
 * @type {chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackFontGenericFamily.CURSIVE;


/**
 * @type {chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackFontGenericFamily.MONOSPACED_SANS_SERIF;


/**
 * @type {chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackFontGenericFamily.MONOSPACED_SERIF;


/**
 * @type {chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackFontGenericFamily.SANS_SERIF;


/**
 * @type {chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackFontGenericFamily.SERIF;


/**
 * @type {chrome.cast.media.TextTrackFontGenericFamily}
 */
chrome.cast.media.TextTrackFontGenericFamily.SMALL_CAPITALS;




/**
 * Default timeout values in milliseconds for media API methods.
 * @constructor
 */
chrome.cast.media.timeout = function() {};


/**
 * number Default editTracksInfo timeout values in milliseconds.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.editTracksInfo;


/**
 * number Default getStatus timeout values in milliseconds.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.getStatus;


/**
 * number Default load timeout values in milliseconds. The default is 0, i.e.,
 * no timeout.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.load;


/**
 * number Default pause timeout values in milliseconds.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.pause;


/**
 * number Default play timeout values in milliseconds.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.play;


/**
 * number Default seek timeout values in milliseconds.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.seek;


/**
 * number Default setVolume timeout values in milliseconds.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.setVolume;


/**
 * number Default stop timeout values in milliseconds.
 * @type {chrome.cast.media.timeout }
 */
chrome.cast.media.timeout.stop;




/**
 * Describes track metadata information.
 * @constructor
 * @param {number} trackId Unique identifier of the track within the context of
 * a chrome.cast.media. MediaInfo object.
 * @param {!chrome.cast.media.TrackType} trackType The type of track. Must not
 * be null.
 */
chrome.cast.media.Track = function(trackId,
    trackType) {};


/**
 * Custom application data.
 * @type {Object}
 */
chrome.cast.media.Track.prototype.customData;


/**
 * Language tag as per RFC 5646. Mandatory when the subtype is SUBTITLES. May be
 * null.
 * @type {?string}
 */
chrome.cast.media.Track.prototype.language;


/**
 * A descriptive, human readable name for the track. For example, “Spanish”.
 * This can be used by the sender UI for example, to create a selectiondialog.
 * If the name is empty the dialog would contain an empty slot. May be null.
 * @type {?string}
 */
chrome.cast.media.Track.prototype.name;


/**
 * For text tracks, the type of text track. May be null.
 * @type {?chrome.cast.media.TextTrackType}
 */
chrome.cast.media.Track.prototype.subtype;


/**
 * Identifier of the track’s content. It can be the url of the track or anyother
 * identifier that allows the receiver to find the content (when thetrack is not
 * inband or included in the manifest). For example it can be theurl of a vtt
 * file. May be null.
 * @type {?string}
 */
chrome.cast.media.Track.prototype.trackContentId;


/**
 * The MIME type of the track content. For example if the track is a vtt fileit
 * will be ‘text/vtt’. This field is needed for out of band tracks, so itis
 * usually provided if a trackContentId has also been provided. It is
 * notmandatory if the receiver has a way to identify the content from
 * thetrackContentId, but recommended. The track content type, if provided, must
 * be consistent with the tracktype. May be null.
 * @type {?string}
 */
chrome.cast.media.Track.prototype.trackContentType;


/**
 * Unique identifier of the track within the context of achrome.cast.media.
 * MediaInfo object.
 * @type {number}
 */
chrome.cast.media.Track.prototype.trackId;


/**
 * The type of track. Must not be null.
 * @type {!chrome.cast.media.TrackType}
 */
chrome.cast.media.Track.prototype.type;


/**
 * @constructor
 */
chrome.cast.media.TextTrackWindowType = function() {};


/**
 * @type {chrome.cast.media.TextTrackWindowType}
 */
chrome.cast.media.TextTrackWindowType.NONE;


/**
 * @type {chrome.cast.media.TextTrackWindowType}
 */
chrome.cast.media.TextTrackWindowType.NORMAL;


/**
 * @type {chrome.cast.media.TextTrackWindowType}
 */
chrome.cast.media.TextTrackWindowType.ROUNDED_CORNERS;


/**
 * @constructor
 */
chrome.cast.media.TextTrackType = function() {};


/**
 * Transcription or translation of the dialogue, sound effects, relevantmusical
 * cues, and other relevant audio information, suitable for when thesoundtrack
 * is unavailable (e.g. because it is muted or because the user isdeaf).
 * Displayed over the video; labeled as appropriate for thehard-of-hearing.
 * @type {chrome.cast.media.TextTrackType}
 */
chrome.cast.media.TextTrackType.CAPTIONS;


/**
 * Chapter titles, intended to be used for navigating the media resource.
 * @type {chrome.cast.media.TextTrackType}
 */
chrome.cast.media.TextTrackType.CHAPTERS;


/**
 * Textual descriptions of the video component of the media resource,
 * intendedfor audio synthesis when the visual component is unavailable (e.g.
 * becausethe user is interacting with the application without a screen, or
 * becausethe user is blind). Synthesized as separate audio track.
 * @type {chrome.cast.media.TextTrackType}
 */
chrome.cast.media.TextTrackType.DESCRIPTIONS;


/**
 * Tracks intended for use from script.
 * @type {chrome.cast.media.TextTrackType}
 */
chrome.cast.media.TextTrackType.METADATA;


/**
 * Transcription or translation of the dialogue, suitable for when the soundis
 * available but not understood (e.g. because the user does not understandthe
 * language of the media resource's soundtrack).
 * @type {chrome.cast.media.TextTrackType}
 */
chrome.cast.media.TextTrackType.SUBTITLES;




/**
 * A TV episode media description.
 * @constructor
 */
chrome.cast.media.TvShowMediaMetadata = function() {};


/**
 * TV episode number. A positive integer. May be null.
 * @type {?number}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.episode;


/**
 * TV episode number. A positive integer. May be null.
 * @type {?number}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.episodeNumber;


/**
 * TV episode title. May be null.
 * @type {?string}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.episodeTitle;


/**
 * Content images. Examples would include cover art or a thumbnail of
 * thecurrently playing media.
 * @type {Array<chrome.cast.Image>}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.images;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.metadataType;


/**
 * ISO 8601 date when the episode originally aired, e.g. 2014-02-10. May be
 * null.
 * @type {?string}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.originalAirdate;


/**
 * Integer year when the content was released. May be null.
 * @type {?number}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.releaseYear;


/**
 * TV episode season. A positive integer. May be null.
 * @type {?number}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.season;


/**
 * TV episode season. A positive integer. May be null.
 * @type {?number}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.seasonNumber;


/**
 * TV series title. May be null.
 * @type {?string}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.seriesTitle;


/**
 * TV episode title. May be null.
 * @type {?string}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.title;


/**
 * The type of metadata.
 * @type {chrome.cast.media.MetadataType}
 */
chrome.cast.media.TvShowMediaMetadata.prototype.type;




/**
 * A request to set the stream volume of the playing media.
 * @constructor
 * @param {!chrome.cast.Volume} volume The new volume of the stream. Must not be
 * null.
 */
chrome.cast.media.VolumeRequest = function(volume) {};


/**
 * Custom data for the receiver application.
 * @type {Object}
 */
chrome.cast.media.VolumeRequest.prototype.customData;


/**
 * The new volume of the stream. At least one of level or muted must be set.
 * Must not be null.
 * @type {!chrome.cast.Volume}
 */
chrome.cast.media.VolumeRequest.prototype.volume;


/**
 * @constructor
 */
chrome.cast.media.TrackType = function() {};


/**
 * @type {chrome.cast.media.TrackType}
 */
chrome.cast.media.TrackType.AUDIO;


/**
 * @type {chrome.cast.media.TrackType}
 */
chrome.cast.media.TrackType.TEXT;


/**
 * @type {chrome.cast.media.TrackType}
 */
chrome.cast.media.TrackType.VIDEO;


/**
 * @constructor
 */
chrome.cast.ReceiverAvailability = function() {};


/**
 * At least one receiver is available that is compatible with the
 * sessionrequest.
 * @type {chrome.cast.ReceiverAvailability}
 */
chrome.cast.ReceiverAvailability.AVAILABLE;


/**
 * No receivers are available.
 * @type {chrome.cast.ReceiverAvailability}
 */
chrome.cast.ReceiverAvailability.UNAVAILABLE;


/**
 * @constructor
 */
chrome.cast.ReceiverAction = function() {};


/**
 * The user selected a receiver with the intent of casting to it with thesender
 * application. The exact identity of the receiver may not be known.
 * @type {chrome.cast.ReceiverAction}
 */
chrome.cast.ReceiverAction.CAST;


/**
 * The user requested to stop the session running on a receiver.
 * @type {chrome.cast.ReceiverAction}
 */
chrome.cast.ReceiverAction.STOP;




/**
 * Describes the receiver running an application. Normally, these objects should
 * not be created by the client.
 * @constructor
 * @param {string} label An identifier for the receiver.
 * @param {string} friendlyName The user-visible name of the receiver.
 * @param {Array<chrome.cast.Capability>=} opt_capabilities Set of receiver
 * capabilities. Optional.
 * @param {chrome.cast.Volume=} opt_volume The receiver's current volume.
 * Optional.
 */
chrome.cast.Receiver = function(label,
    friendlyName,
    opt_capabilities,
    opt_volume) {};


/**
 * The capabilities of the receiver, for example audio and video. Must not be
 * null.
 * @type {!Array<!chrome.cast.Capability>}
 */
chrome.cast.Receiver.prototype.capabilities;


/**
 * Receiver status shown to the user in the extension UI. Only valid for CUSTOM
 * receivers. To show the receiver as idle,set displayStatus to null.
 * @type {chrome.cast.ReceiverDisplayStatus}
 */
chrome.cast.Receiver.prototype.displayStatus;


/**
 * The user given name for the receiver. Mandatory.
 * @type {string}
 */
chrome.cast.Receiver.prototype.friendlyName;


/**
 * An identifier for the receiver that is unique to the browserprofile and the
 * origin of the API client. It is stable across browserrestarts, but may change
 * if the user clears his local storage.
 * @type {string}
 */
chrome.cast.Receiver.prototype.label;


/**
 * The type of receiver device. Mandatory. Must not be null.
 * @type {!chrome.cast.ReceiverType}
 */
chrome.cast.Receiver.prototype.receiverType;


/**
 * The current volume of the receiver. If non-null, the volume's level andmuted
 * properties will always be set.
 * @type {chrome.cast.Volume}
 */
chrome.cast.Receiver.prototype.volume;




/**
 * Receiver status shown to the user in the extension UI. Only valid for CUSTOM
 * receivers.
 * @constructor
 * @param {string} statusText Description of current application status in plain
 * text, for example, name of the content being shown.
 * @param {!Array<chrome.cast.Image>} appImages Images associated with the app.
 * Must not be null.
 */
chrome.cast.ReceiverDisplayStatus = function(statusText,
    appImages) {};


/**
 * Array of images available describing the application. Must not be null.
 * @type {!Array<chrome.cast.Image>}
 */
chrome.cast.ReceiverDisplayStatus.prototype.appImages;


/**
 * Descriptive text for the current application content, for example “MyWedding
 * Slideshow”.
 * @type {string}
 */
chrome.cast.ReceiverDisplayStatus.prototype.statusText;


/**
 * @constructor
 */
chrome.cast.ReceiverType = function() {};


/**
 * Cast receiver, e.g. Chromecast
 * @type {chrome.cast.ReceiverType}
 */
chrome.cast.ReceiverType.CAST;


/**
 * Custom receiver provided by client
 * @type {chrome.cast.ReceiverType}
 */
chrome.cast.ReceiverType.CUSTOM;


/**
 * Hangout
 * @type {chrome.cast.ReceiverType}
 */
chrome.cast.ReceiverType.HANGOUT;


/**
 * @constructor
 */
chrome.cast.SenderPlatform = function() {};


/**
 * @type {chrome.cast.SenderPlatform}
 */
chrome.cast.SenderPlatform.ANDROID;


/**
 * @type {chrome.cast.SenderPlatform}
 */
chrome.cast.SenderPlatform.CHROME;


/**
 * @type {chrome.cast.SenderPlatform}
 */
chrome.cast.SenderPlatform.IOS;




/**
 * A request to start or connect to a session.
 * @constructor
 * @param {string} appId The receiver application id.
 * @param {!Array<chrome.cast.Capability>=} opt_capabilities Required
 * capabilities for the receiver. Must not be null. Optional.
 * @param {number=} opt_timeout Optional timeout for requesting a session for
 * this application. Optional.
 */
chrome.cast.SessionRequest = function(appId,
    opt_capabilities,
    opt_timeout) {};


/**
 * The receiver application id.
 * @type {string}
 */
chrome.cast.SessionRequest.prototype.appId;


/**
 * Capabilities required of the receiver device. Must not be null.
 * @type {!Array<chrome.cast.Capability>}
 */
chrome.cast.SessionRequest.prototype.capabilities;


/**
 * Optional language to add to the Accept-Language header value when
 * launchingthe receiver application. Ignored if joining an already existing
 * session. The value is represented as '-' tag as per RFC 5646. Forexample
 * 'es-ES'. May be null.
 * @type {?string}
 */
chrome.cast.SessionRequest.prototype.language;


/**
 * The timeout used for requesting a session for the application inmilliseconds.
 * Defaults to the value of chrome.cast.timeout.requestSession.
 * @type {number}
 */
chrome.cast.SessionRequest.prototype.requestSessionTimeout;




/**
 * Describes the state of a currently running Cast application. Normally, these
 * objects should not be created by the client.
 * @constructor
 * @param {string} sessionId The session identifier.
 * @param {string} appId The receiver application identifier.
 * @param {string} displayName The display name of the application.
 * @param {!Array<chrome.cast.Image>} appImages Images associated with the app.
 * Must not be null.
 * @param {!chrome.cast.Receiver} receiver The receiver that is running the app.
 * Must not be null.
 */
chrome.cast.Session = function(sessionId,
    appId,
    displayName,
    appImages,
    receiver) {};


/**
 * The identifer of the Cast application. Not for display.
 * @type {string}
 */
chrome.cast.Session.prototype.appId;


/**
 * Array of images available describing the application. Must not be null.
 * @type {!Array<chrome.cast.Image>}
 */
chrome.cast.Session.prototype.appImages;


/**
 * The human-readable name of the Cast application, for example, "YouTube".
 * @type {string}
 */
chrome.cast.Session.prototype.displayName;


/**
 * The media that belong to this Cast session, including thoseloaded by other
 * senders. Must not be null.
 * @type {!Array<!chrome.cast.media.Media>}
 */
chrome.cast.Session.prototype.media;


/**
 * A list of the namespaces supported by the receiver application. Must not be
 * null.
 * @type {!Array<!{name: string}>}
 */
chrome.cast.Session.prototype.namespaces;


/**
 * The receiver that is running the application. Must not be null.
 * @type {!chrome.cast.Receiver}
 */
chrome.cast.Session.prototype.receiver;


/**
 * The sender applications supported by the receiver application. This may
 * beused to prompt the user to install or visit the sender application. Must
 * not be null.
 * @type {!Array<!chrome.cast.SenderApplication>}
 */
chrome.cast.Session.prototype.senderApps;


/**
 * Uniquely identifies this instance of the receiver application.
 * @type {string}
 */
chrome.cast.Session.prototype.sessionId;


/**
 * Status of this Cast session to the receiver application. Must not be null.
 * @type {!chrome.cast.SessionStatus}
 */
chrome.cast.Session.prototype.status;


/**
 * Descriptive text for the current application content, for example “MyWedding
 * Slideshow”. May be null.
 * @type {?string}
 */
chrome.cast.Session.prototype.statusText;


/**
 * Sets the receiver volume.
 * @return {void}
 * @param {number} newLevel The new volume level between 0.0 and 1.0.
 * @param {function()} successCallback
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER, CHANNEL_ERROR,
 * SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.Session.prototype.setReceiverVolumeLevel = function(newLevel,
    successCallback,
    errorCallback) {};


/**
 * Sets the receiver volume.
 * @return {void}
 * @param {boolean} muted The new muted status.
 * @param {function()} successCallback
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER, CHANNEL_ERROR,
 * SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.Session.prototype.setReceiverMuted = function(muted,
    successCallback,
    errorCallback) {};


/**
 * Leaves (disconnects) from the running receiver application associated withthe
 * session. Existing clients within the scope defined by this client's
 * AutoJoinPolicywill be disconnected. Future clients will not automatically
 * join the sessionthat was left. All disconnected clients will have their
 * session update listeners calledwith isAlive = true. Listeners should check
 * thestatus property of the Session to determine its connectionstatus since
 * isAlive is deprecated. In this case,status = chrome.cast. SessionStatus.
 * @return {void}
 * @param {function()} successCallback
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, API_NOT_INITIALIZED, CHANNEL_ERROR, SESSION_ERROR, and
 * EXTENSION_MISSING.
 */
chrome.cast.Session.prototype.leave = function(successCallback,
    errorCallback) {};


/**
 * Stops the running receiver application associated with the session.
 * @return {void}
 * @param {function()} successCallback
 * @param {function(chrome.cast.Error)} errorCallback The possible errors are
 * TIMEOUT, API_NOT_INITIALIZED, CHANNEL_ERROR, SESSION_ERROR, and
 * EXTENSION_MISSING.
 */
chrome.cast.Session.prototype.stop = function(successCallback,
    errorCallback) {};


/**
 * Sends a message to the receiver application on the given namespace.
 * ThesuccessCallback is invoked when the message has been submitted to
 * themessaging channel. Delivery to the receiver application is best effort
 * @return {void}
 * @param {string} namespace The namespace to send the message on, e.g.
 * 'urn:x-cast:com.example.namespace'.
 * @param {!Object} message Must not be null.
 * @param {!function()} successCallback Invoked when the message has been sent.
 * Must not be null.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.Session.prototype.sendMessage = function(namespace,
    message,
    successCallback,
    errorCallback) {};


/**
 * Adds a listener that is invoked when the Session has changed. Changes to
 * thefollowing properties will trigger the listener: statusText,
 * namespaces,status, and the volume of the receiver. Listeners should check the
 * status property of the Session todetermine its connection status. The boolean
 * parameter isAliveis deprecated in favor of the status Session property.
 * TheisAlive parameter is still passed in for backwardscompatibility, and is
 * true unlessstatus = chrome.cast. SessionStatus. STOPPED.
 * @return {void}
 * @param {function(boolean)} listener The listener to add.
 */
chrome.cast.Session.prototype.addUpdateListener = function(listener) {};


/**
 * Removes a previously added listener for this Session.
 * @return {void}
 * @param {function(boolean)} listener The listener to remove.
 */
chrome.cast.Session.prototype.removeUpdateListener = function(listener) {};


/**
 * Adds a listener that is invoked when a message is received from the
 * receiverapplication. The listener is invoked with the the namespace as the
 * firstargument and the message as the second argument.
 * @return {void}
 * @param {string} namespace The namespace to listen on, e.g.
 * 'urn:x-cast:com.example.namespace'.
 * @param {function(string,string)} listener The listener to add.
 */
chrome.cast.Session.prototype.addMessageListener = function(namespace,
    listener) {};


/**
 * Removes a previously added listener for messages.
 * @return {void}
 * @param {string} namespace The namespace that is listened to, e.g.
 * 'urn:x-cast:com.example.namespace'.
 * @param {function(string,string)} listener The listener to remove.
 */
chrome.cast.Session.prototype.removeMessageListener = function(namespace,
    listener) {};


/**
 * Adds a listener that is invoked when a media session is created byanother
 * sender.
 * @return {void}
 * @param {function(chrome.cast.media.Media)} listener The listener to add.
 */
chrome.cast.Session.prototype.addMediaListener = function(listener) {};


/**
 * Removes a listener that was previously added with addMediaListener.
 * @return {void}
 * @param {function(chrome.cast.media.Media)} listener The listener to remove.
 */
chrome.cast.Session.prototype.removeMediaListener = function(listener) {};


/**
 * Loads media into a running receiver application.
 * @return {void}
 * @param {!chrome.cast.media.LoadRequest} loadRequest Request to load media.
 * Must not be null.
 * @param {function(chrome.cast.media.Media)} successCallback Invoked with the
 * loaded Media on success.
 * @param {function(chrome.cast.Error)} errorCallback Invoked on error. The
 * possible errors are TIMEOUT, API_NOT_INITIALIZED, INVALID_PARAMETER,
 * CHANNEL_ERROR, SESSION_ERROR, and EXTENSION_MISSING.
 */
chrome.cast.Session.prototype.loadMedia = function(loadRequest,
    successCallback,
    errorCallback) {};




/**
 * Default timeout values in milliseconds for API methods.
 * @constructor
 */
chrome.cast.timeout = function() {};




/**
 * The volume of a device or media stream.
 * @constructor
 * @param {?number=} opt_level The volume level. May be null. Optional.
 * @param {?boolean=} opt_muted The mute status. May be null. Optional.
 */
chrome.cast.Volume = function(opt_level,
    opt_muted) {};


/**
 * The current volume level as a value between 0.0 and 1.0. 1.0 is the
 * maximumvolume possible on the receiver or stream. May be null.
 * @type {?number}
 */
chrome.cast.Volume.prototype.level;


/**
 * Whether the receiver is muted, independent of the volume level. May be null.
 * @type {?boolean}
 */
chrome.cast.Volume.prototype.muted;




/**
 * Describes a sender application. Normally, these objects should not be created
 * by the client.
 * @constructor
 * @param {!chrome.cast.SenderPlatform} platform Must not be null.
 */
chrome.cast.SenderApplication = function(platform) {};


/**
 * The identifier or URL for the application in the respective platform's
 * appstore. May be null.
 * @type {?string}
 */
chrome.cast.SenderApplication.prototype.packageId;


/**
 * The supported platform. Must not be null.
 * @type {!chrome.cast.SenderPlatform}
 */
chrome.cast.SenderApplication.prototype.platform;


/**
 * URL or intent to launch the application. May be null.
 * @type {?string}
 */
chrome.cast.SenderApplication.prototype.url;


/**
 * @constructor
 */
chrome.cast.SessionStatus = function() {};


/**
 * The session is connected to the receiver application.
 * @type {chrome.cast.SessionStatus}
 */
chrome.cast.SessionStatus.CONNECTED;


/**
 * The session is disconnected from the receiver application. The
 * receiverapplication may or may not still be running.
 * @type {chrome.cast.SessionStatus}
 */
chrome.cast.SessionStatus.DISCONNECTED;


/**
 * The receiver application has been stopped.
 * @type {chrome.cast.SessionStatus}
 */
chrome.cast.SessionStatus.STOPPED;