"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Users, FolderKanban, Settings, LogOut, Search, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-brand-border hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-brand-border">
          <Link href="/" className="text-xl font-heading font-bold tracking-tight">
            [<span className="text-brand-name">Admin</span>]
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-brand-primary text-brand-bg" : "hover:bg-brand-border text-brand-muted hover:text-brand-primary"}`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Overview
          </button>
          <button 
            onClick={() => setActiveTab("products")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === "products" ? "bg-brand-primary text-brand-bg" : "hover:bg-brand-border text-brand-muted hover:text-brand-primary"}`}
          >
            <FolderKanban className="w-4 h-4" />
            Products
          </button>
          <button 
            onClick={() => setActiveTab("orders")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === "orders" ? "bg-brand-primary text-brand-bg" : "hover:bg-brand-border text-brand-muted hover:text-brand-primary"}`}
          >
            <ShoppingBag className="w-4 h-4" />
            Orders
          </button>
          <button 
            onClick={() => setActiveTab("customers")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === "customers" ? "bg-brand-primary text-brand-bg" : "hover:bg-brand-border text-brand-muted hover:text-brand-primary"}`}
          >
            <Users className="w-4 h-4" />
            Customers
          </button>
          <button 
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === "settings" ? "bg-brand-primary text-brand-bg" : "hover:bg-brand-border text-brand-muted hover:text-brand-primary"}`}
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>

        <div className="p-4 border-t border-brand-border">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 border-b border-brand-border flex items-center justify-between px-6 bg-brand-bg/90 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input 
                type="text" 
                placeholder="Search everything..." 
                className="w-full bg-transparent border border-brand-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-brand-primary transition-colors"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="relative p-2 text-brand-muted hover:text-brand-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-name rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-brand-primary text-brand-bg flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6 md:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold capitalize">{activeTab}</h1>
            <p className="text-brand-muted mt-2">Manage your labstore {activeTab} and settings here.</p>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Total Revenue", value: "₹24,500", change: "+12%" },
                  { label: "Active Orders", value: "14", change: "+4" },
                  { label: "Total Products", value: "32", change: "0" },
                  { label: "Custom Requests", value: "5", change: "+2" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 border border-brand-border rounded-lg bg-brand-bg">
                    <p className="text-sm font-mono text-brand-muted mb-2 uppercase">{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-heading font-bold">{stat.value}</p>
                      <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-brand-muted'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders Table */}
              <div className="border border-brand-border rounded-lg overflow-hidden bg-brand-bg mt-8">
                <div className="p-4 border-b border-brand-border bg-brand-bg">
                  <h2 className="font-heading font-bold">Recent Orders</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-xs font-mono uppercase text-brand-muted bg-brand-border/20">
                      <tr>
                        <th className="px-6 py-4 font-normal">Order ID</th>
                        <th className="px-6 py-4 font-normal">Customer</th>
                        <th className="px-6 py-4 font-normal">Product</th>
                        <th className="px-6 py-4 font-normal">Status</th>
                        <th className="px-6 py-4 font-normal">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border">
                      {[
                        { id: "#ORD-001", name: "Rahul S.", product: "Smart Home Kit", status: "Processing", amount: "₹4,999" },
                        { id: "#ORD-002", name: "Neha K.", product: "Drone Software Bundle", status: "Shipped", amount: "₹2,499" },
                        { id: "#ORD-003", name: "Vikram P.", product: "Robotic Arm (Custom)", status: "Pending", amount: "₹12,000" },
                        { id: "#ORD-004", name: "Priya M.", product: "IoT Sensor Pack", status: "Delivered", amount: "₹1,299" },
                      ].map((order, i) => (
                        <tr key={i} className="hover:bg-brand-border/10 transition-colors">
                          <td className="px-6 py-4 font-mono">{order.id}</td>
                          <td className="px-6 py-4">{order.name}</td>
                          <td className="px-6 py-4 text-brand-muted">{order.product}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' : 
                              order.status === 'Processing' ? 'bg-blue-500/10 text-blue-500' : 
                              order.status === 'Shipped' ? 'bg-purple-500/10 text-purple-500' : 
                              'bg-yellow-500/10 text-yellow-500'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-mono">{order.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "overview" && (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-brand-border rounded-lg">
              <div className="w-16 h-16 rounded-full bg-brand-border/30 flex items-center justify-center mb-4 text-brand-muted">
                {activeTab === 'products' ? <FolderKanban className="w-8 h-8" /> : 
                 activeTab === 'orders' ? <ShoppingBag className="w-8 h-8" /> : 
                 activeTab === 'customers' ? <Users className="w-8 h-8" /> : 
                 <Settings className="w-8 h-8" />}
              </div>
              <h2 className="text-xl font-heading font-bold mb-2">Module under development</h2>
              <p className="text-brand-muted max-w-sm">The {activeTab} management module will be available in the next update.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
