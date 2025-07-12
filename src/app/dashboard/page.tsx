'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { useAuth } from '@/context/better-auth.context';

export default function DashboardPage() {
  return <DashboardContent />;
}

function DashboardContent() {
  const { user } = useAuth();

  return (
    <>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Mini Soccer Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back, {user?.name || 'Admin'}! Manage your mini soccer
              facility and leagues
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="font-medium">
              View Reports
            </Button>
            <Button className="font-medium">Schedule Match</Button>
          </div>
        </div>{' '}
        {/* Data table with loading example */}
        <div className="mb-8">{/* <DataTableWithLoading /> */}</div>
        {/* Auth diagnostics and middleware testing components */}
        <div className="mb-6 space-y-6">
          {/* <MiddlewareProtectionTester /> */}
          {/* <AuthDiagnostics /> */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Players */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-medium">
                Total Players
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent className="py-2">
              <div className="text-3xl font-bold">324</div>
              <p className="text-xs text-green-600 mt-2">+12 new this month</p>
            </CardContent>
          </Card>

          {/* Active Teams */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-medium">
                Active Teams
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent className="py-2">
              <div className="text-3xl font-bold">18</div>
              <p className="text-xs text-blue-600 mt-2">3 leagues running</p>
            </CardContent>
          </Card>

          {/* Upcoming Matches */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-medium">
                Upcoming Matches
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-muted-foreground"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </CardHeader>
            <CardContent className="py-2">
              <div className="text-3xl font-bold">8</div>
              <p className="text-xs text-orange-600 mt-2">This weekend</p>
            </CardContent>
          </Card>

          {/* Total Revenue */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-medium">
                Total Revenue
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent className="py-2">
              <div className="text-3xl font-bold">$12,450</div>
              <p className="text-xs text-green-600 mt-2">
                +15.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Additional Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {/* Fields Booked */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-medium">
                Fields Booked Today
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-muted-foreground"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="M6 8h12" />
                <path d="M6 12h12" />
                <path d="M6 16h12" />
              </svg>
            </CardHeader>
            <CardContent className="py-2">
              <div className="text-3xl font-bold">15/20</div>
              <p className="text-xs text-yellow-600 mt-2">75% occupancy rate</p>
            </CardContent>
          </Card>

          {/* Equipment Rentals */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-medium">
                Equipment Rentals
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-muted-foreground"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" />
              </svg>
            </CardHeader>
            <CardContent className="py-2">
              <div className="text-3xl font-bold">42</div>
              <p className="text-xs text-purple-600 mt-2">Active rentals</p>
            </CardContent>
          </Card>

          {/* Tournament Registrations */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-medium">
                Tournament Signups
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </CardHeader>
            <CardContent className="py-2">
              <div className="text-3xl font-bold">89</div>
              <p className="text-xs text-green-600 mt-2">Summer Cup 2025</p>
            </CardContent>
          </Card>
        </div>
        {/* Recent Matches Section */}
        <Card className="mt-8 border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Matches</CardTitle>
            <CardDescription>
              Latest match results and upcoming fixtures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <h3 className="font-medium">
                      Thunder FC vs Lightning United
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      July 10, 2025 • Field A
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-green-600">3-2</span>
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                    Completed
                  </span>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <h3 className="font-medium">
                      Storm Tigers vs Rapid Rangers
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      July 11, 2025 • Field B
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-blue-600">1-1</span>
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                    Draw
                  </span>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <h3 className="font-medium">
                      Victory Wolves vs Elite Eagles
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      July 14, 2025 • Field A • 3:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded">
                    Upcoming
                  </span>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Quick Stats and League Tables */}
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {/* Top Scorers */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Top Scorers</CardTitle>
              <CardDescription>
                Leading goal scorers this season
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Marcus Rodriguez</p>
                      <p className="text-sm text-muted-foreground">
                        Thunder FC
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">15 goals</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Alex Thompson</p>
                      <p className="text-sm text-muted-foreground">
                        Lightning United
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">12 goals</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">David Chen</p>
                      <p className="text-sm text-muted-foreground">
                        Storm Tigers
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">11 goals</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* League Standings */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>League Standings</CardTitle>
              <CardDescription>Current season standings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Thunder FC</p>
                      <p className="text-sm text-muted-foreground">8W-1D-1L</p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">25 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Lightning United</p>
                      <p className="text-sm text-muted-foreground">7W-2D-1L</p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">23 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Storm Tigers</p>
                      <p className="text-sm text-muted-foreground">6W-3D-1L</p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">21 pts</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
