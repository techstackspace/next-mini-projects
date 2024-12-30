"use client";

import { Settings, User, LogOut } from "lucide-react";
import { DropdownProvider } from "@/components/ui/Dropdown/context";
import { Dropdown } from "@/components/ui/Dropdown";
import { Button } from "@/components/ui/Button";

export default function DropdownPage() {
  return (
    <DropdownProvider>
      <main className="min-h-screen p-8">
        <div className="flex gap-4 justify-center items-center">
          {/* User Dropdown */}
          <Dropdown
            id="user"
            trigger={
              <Button variant="outline">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            }
            className="w-48 py-1"
          >
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Your Profile
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Settings
            </div>
            <div className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer">
              Sign out
            </div>
          </Dropdown>

          {/* Settings Dropdown */}
          <Dropdown
            id="settings"
            trigger={
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            }
            className="w-56 py-1"
          >
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Account Settings
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Privacy & Security
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Notifications
            </div>
          </Dropdown>

          {/* Logout Dropdown */}
          <Dropdown
            id="logout"
            trigger={
              <Button variant="outline" className="text-red-600 hover:bg-red-50">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            }
            className="w-48 py-1"
          >
            <div className="px-4 py-3 text-sm text-gray-700">
              <p>Are you sure you want to logout?</p>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  className="w-full bg-red-500 text-white"
                  onClick={() => console.log('Logging out...')}
                >
                  Yes, logout
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => console.log('Cancel logout')}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Dropdown>
        </div>
      </main>
    </DropdownProvider>
  );
}