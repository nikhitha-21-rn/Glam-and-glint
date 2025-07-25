'use client';

import { useEffect, useState, useRef } from 'react';
import { auth, storage } from '../../lib/firebase';
import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useUser } from '../../profilecontext/UserContext';
import Webcam from 'react-webcam';
import { ToastContainer, toast } from 'react-toastify';

export default function ViewProfile() {
  const { user, setUser } = useUser();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    console.log("Current user:", user);
  }, [user]);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    console.log("Selected file:", selected);
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const capturedFile = new File([blob], 'captured.jpg', { type: 'image/jpeg' });
        setFile(capturedFile);
        setPreview(URL.createObjectURL(capturedFile));
        setUseCamera(false);
      });
  };

  const uploadPhoto = async () => {
    if (!file || !user) {
      toast.error('No file or user logged in!');
      return;
    }

    console.log("Uploading...");
    setUploading(true);
    try {
      const storageRef = ref(storage, `profileImages/${user.uid}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await updateProfile(auth.currentUser, { photoURL: url });
      setUser({ ...auth.currentUser });
      toast.success('Profile photo uploaded!');
      setFile(null);
      setPreview(null);
    } catch (err) {
      console.error("Upload error:", err);
      toast.error('Upload failed!');
    } finally {
      setUploading(false);
    }
  };

  const resetPhoto = async () => {
    try {
      await updateProfile(auth.currentUser, { photoURL: '' });
      setUser({ ...auth.currentUser });
      setPreview(null);
      toast.success('Reset to default photo.');
    } catch (err) {
      console.error("Reset error:", err);
      toast.error('Reset failed!');
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-pink-600">Your Profile</h2>

        {user ? (
          <>
            <div className="flex justify-center">
              <img
                src={preview || user.photoURL || '/userimg.jpg'}
                alt="Profile"
                className="w-24 h-24 rounded-full border object-cover"
              />
            </div>

            <div className="text-center space-y-1">
              <p className="text-gray-700"><strong>Name:</strong> {user.displayName || 'Not set'}</p>
              <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">📁 Upload from Computer</label>
              <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-1 border rounded" />
            </div>

            <button
              onClick={() => setUseCamera(!useCamera)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              {useCamera ? 'Close Camera' : '📷 Use Camera'}
            </button>

            {useCamera && (
              <div className="space-y-2">
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  screenshotFormat="image/jpeg"
                  className="w-full h-48 object-cover rounded border"
                />
                <button
                  onClick={capturePhoto}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
                >
                  🟢 Capture Photo
                </button>
              </div>
            )}

            <button
              onClick={uploadPhoto}
              disabled={!file || uploading}
              className={`${
                uploading ? 'bg-gray-400' : 'bg-pink-500 hover:bg-pink-600'
              } text-white px-4 py-2 rounded w-full`}
            >
              {uploading ? 'Uploading...' : '⬆️ Upload Photo'}
            </button>

            <button
              onClick={resetPhoto}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded w-full"
            >
              🔁 Reset to Default
            </button>
          </>
        ) : (
          <p className="text-center text-gray-600">Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
}
