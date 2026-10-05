"use client";

export default function ChatWindowPage({ selectedUser }) {
  if (!selectedUser) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl bg-white">
        <p className="text-gray-500">
          Select a person to start chatting
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-xl bg-white border">
      {/* Header */}
      <div className="border-b p-4">
        <h2 className="font-semibold">
          {selectedUser.name}
        </h2>

        <p className="text-sm text-gray-500">
          Online
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4">
        <div className="mb-3 w-fit rounded-lg bg-gray-100 px-4 py-2">
          Hi 👋
        </div>

        <div className="ml-auto w-fit rounded-lg bg-blue-500 px-4 py-2 text-white">
          Hello!
        </div>
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-lg border px-4 py-2 outline-none"
          />

          <button className="rounded-lg bg-blue-500 px-5 text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}